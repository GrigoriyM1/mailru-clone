import { BadRequestException, Injectable } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto'
import { PrismaService } from 'src/prisma.service';
import { isTimeUp } from './utils/isTimeUp';
import { AddAdditionalDto } from './dto/add-additional.dto';
import { CATEGORIES } from './constants/categories.constants';
import { getTimeFrame, TimeFrame } from './utils/getTimeFrame';

@Injectable()
export class QuestionService {
  private readonly MINUTES_TO_UPDATE = 30

  constructor(
    private prisma: PrismaService,
  ) { }


  async getAll(category: string, skip: number, take: number, skipAnswer: number, takeAnswer: number) {
    const whereClause: any = {};

    if (category && category !== 'best' && category !== 'open') {
      whereClause.OR = [
        { category: category },
        { subcategory: category }
      ];
    }

    return this.prisma.question.findMany({
      where: whereClause,
      skip,
      take,
      include: {
        answers: {
          skip: skipAnswer,
          take: takeAnswer,
        },
        user: {
          select: {
            id: true,
            name: true,
            lastName: true,
            avatar: true,
          },
        },
      },
      orderBy: category === 'best' ? { likes: 'desc' } : { createdAt: 'desc' },
    });
  }



  async getOne(id: string, skipAnswer: number, takeAnswer: number) {
    return this.prisma.question.findUnique({
      where: {
        id,
      },
      include: {
        additionals: true,
        likedBy: {
          select: {
            id: true,
            name: true,
            lastName: true,
            avatar: true,
          }
        },
        answers: {
          skip: skipAnswer,
          take: takeAnswer,
          select: {
            createdAt: true,
            id: true,
            isBestAnswer: true,
            likes: true,
            questionId: true,
            text: true,
            updatedAt: true,
            user: {
              select: {
                id: true,
                name: true,
                lastName: true,
                avatar: true,
              }
            },
            userId: true,
            likedBy: {
              select: {
                id: true,
                name: true,
                lastName: true,
                avatar: true,
              }
            },
            comments: {
              select: {
                id: true,
                text: true,
                createdAt: true,
                updatedAt: true,
                user: {
                  select: {
                    id: true,
                    name: true,
                    lastName: true,
                    avatar: true,
                  }
                },
              }
            },
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            lastName: true,
            avatar: true,
          }
        },
      },
    });
  }

  async create(dto: QuestionDto, userId: string) {
    return this.prisma.question.create({
      data: {
        themeText: dto.themeText.trim(),
        text: dto.text.trim(),
        category: dto.category.trim(),
        subcategory: dto.subcategory.trim(),
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async update(dto: Partial<QuestionDto>, questionId: string, userId: string) {
    const question = await this.prisma.question.findUnique({
      where: {
        id: questionId,
        userId,
      },
    });

    if (!question) {
      throw new BadRequestException('Вы не создатель этого вопроса');
    }

    // прошло ли 30 мин после создания
    if (isTimeUp(this.MINUTES_TO_UPDATE, question.createdAt.toString())) {
      throw new BadRequestException('Нельзя обновить поcле 30 минут c момента создания вопроса');
    }

    return this.prisma.question.update({
      where: {
        userId,
        id: questionId,
      },
      data: {
        themeText: dto.themeText.trim(),
        text: dto.text.trim(),
        category: dto.category.trim(),
        subcategory: dto.subcategory.trim(),
      },
    });
  }

  async delete(questionId: string) {
    return this.prisma.question.delete({
      where: {
        id: questionId
      }
    });
  }

  async like(questionId: string, userId: string) {
    const question = await this.prisma.question.findUnique({
      where: { id: questionId },
      include: { likedBy: true }
    });

    const userLiked = question.likedBy.some(user => user.id === userId);

    if (userLiked) {
      return this.prisma.question.update({
        where: { id: questionId },
        data: {
          likes: { decrement: 1 },
          likedBy: {
            disconnect: {
              id: userId,
            },
          }
        },
        select: {
          likedBy: true,
          likes: true
        }
      });
    } else {
      return this.prisma.question.update({
        where: { id: questionId },
        data: {
          likes: { increment: 1 },
          likedBy: {
            connect: {
              id: userId,
            },
          }
        },
        select: {
          likedBy: true,
          likes: true
        }
      });
    }
  }

  async addAdditional(dto: AddAdditionalDto, questionId: string, userId: string) {
    return this.prisma.question.update({
      where: { id: questionId },
      data: {
        additionals: {
          create: {
            text: dto.additional.trim(),
          },
        },
      },
      include: {
        additionals: true,
      }
    });
  }


  async getCategories() {
    return CATEGORIES
  }

  async getLeaders(category: string | undefined, skip: number, take: number) {
    let orCase: any = {}
    if (category) {
      orCase = {
        OR: [
          { subcategory: category },
          { category: category }
        ]
      }
    }

    return this.prisma.question.findMany({
      where: {
        isLeader: true,
        ...orCase
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            lastName: true,
            avatar: true,
          }
        },
        answers: true,
      },
      skip,
      take
    })
  }

  async getFromUser(userId: string, category: string, skip: number, take: number) {
    let whereClause: any = {};

    if (category === 'resolve') whereClause = {
      userId,
      answers: {
        some: {
          isBestAnswer: true,
        }
      }
    }

    if (!Object.keys(whereClause).length) whereClause = {
      userId,
    }
    
    const [questions, questionsLength, answersLength, resolveQuestionsLength] = await Promise.all([
      this.prisma.question.findMany({
        where: whereClause,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              lastName: true,
              avatar: true,
            },
          },
          answers: {
            select: { id: true },
          }
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take,
      }),
      this.prisma.question.count({
        where: {
          userId
        },
      }),
      this.prisma.answer.count({
        where: {
          userId,
        },
      }),
      this.prisma.question.count({
        where: {
          userId,
          answers: {
            some: {
              isBestAnswer: true,
            },
          },
        },
      })
    ]);

    // Возвращаем результаты
    return {
      questions,
      questionsLength,
      answersLength,
      resolveQuestionsLength,
    };
  }





  async search(
    searchText: string, 
    category: string, 
    subcategory: string, 
    time: TimeFrame,
    type: 'all' | 'resolve',
    order: 'relevance' | 'date',
    skip: number, 
    take: number
  ) {
    const formattedSearchText = searchText.trim().toLowerCase();

    const [data, matchesLength] = await Promise.all([
      this.prisma.question.findMany({
        where: {
          OR: [
            {
              themeText: {
                contains: formattedSearchText,
                mode: 'insensitive',
              },
            },
            {
              text: {
                contains: formattedSearchText,
                mode: 'insensitive',
              },
            },
          ],
          ...(subcategory && {
            OR: [
              { subcategory },
              // { category: category },
            ],
          }),
  
          ...(time && getTimeFrame(time) && { createdAt: { gte: getTimeFrame(time) } }),
          ...(type === 'resolve' && {
            answers: {
              some: {
                isBestAnswer: true,
              },
            },
          })
        },
        include: {
          answers: true,
          user: {
            select: {
              id: true,
              name: true,
              lastName: true,
              avatar: true,
            },
          },
        },
        orderBy: order === 'relevance' ? {
          likes: 'desc',
        } : {
          createdAt: 'desc',
        },
        skip,
        take,
      }),
      this.prisma.question.count({
        where: {
          OR: [
            {
              themeText: {
                contains: formattedSearchText,
                mode: 'insensitive',
              },
            },
            {
              text: {
                contains: formattedSearchText,
                mode: 'insensitive',
              },
            },
          ],
          ...(subcategory && {
            OR: [
              { subcategory },
            ],
          }),
  
          ...(time && getTimeFrame(time) && { createdAt: { gte: getTimeFrame(time) } }),
          ...(type === 'resolve' && {
            answers: {
              some: {
                isBestAnswer: true,
              },
            },
          })
        },
      })
    ])

    return { data, matchesLength }
  }
}
