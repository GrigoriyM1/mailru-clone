import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AnswerDto } from './dto/answer.dto';
import { CommentDto } from './dto/comment.dto';
import { BestAnswerDto } from './dto/best-answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async create(dto: AnswerDto, questionId: string, userId: string) {
    return this.prisma.answer.create({
      data: {
        text: dto.text.trim(),        
        questionId,
        userId,
      },
    });  
  }

  async update(dto: AnswerDto, id: string, userId: string) {
    return this.prisma.answer.update({
      where: {
        id,
        userId,
      },
      data: { text: dto.text.trim() },
    });
  }

  async delete(id: string, userId: string) {
    return this.prisma.answer.delete({
      where: {
        id,
        userId,
      },
    }); 
  }

  async like(answerId: string, userId: string) {
    const answer = await this.prisma.answer.findUnique({
      where: { id: answerId },
      include: { 
        likedBy: true, 
        question: {
          select: {
            userId: true
          }
        } 
      }
    });

    const userLiked = answer.likedBy.some(user => user.id === userId);
    const isMyQuestion = answer.question.userId === userId;

    
    if (userLiked) {
      if (isMyQuestion) throw new BadRequestException('Вы не можете убрать лайк с ответа на ваш вопрос');

      return this.prisma.answer.update({
        where: { id: answerId },
        data: {
          likes: { decrement: 1 },
          likedBy: {
            disconnect: {
              id: userId,
            },
          }
        },
        select: {
          likedBy: {
            select: {
              id: true,
              name: true,
              lastName: true,
              avatar: true,
            }
          },
          likes: true
        }
      });
    } else {
      return this.prisma.answer.update({
        where: { id: answerId },
        data: {
          likes: { increment: 1 },
          likedBy: {
            connect: {
              id: userId,
            },
          }
        },
        select: {
          likedBy: {
            select: {
              id: true,
              name: true,
              lastName: true,
              avatar: true,
            }
          },
          likes: true
        }
      });
    }
  }

  async comment(
    dto: CommentDto,
    answerId: string,
    userId: string,
  ) {
    return this.prisma.comment.create({
      data: {
        text: dto.text.trim(),
        answerId,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            lastName: true,
            avatar: true,
          }
        }
      }
    });
  }

  async bestAnswer(
    dto: BestAnswerDto,
    answerId: string,
    userId: string,
  ) {
    const question = await this.prisma.question.findUnique({
      where: {id: dto.questionId},
    });
    const bestAnswer = await this.prisma.answer.findFirst({
      where: {
        questionId: question.id,
        isBestAnswer: true,
      },
    });

    const isMyQuestion = question.userId === userId;

    if (!isMyQuestion || bestAnswer) throw new BadRequestException('Вы не можете отметить ответ лучшим');

    return this.prisma.answer.update({
      where: {id: answerId},
      data: {
        isBestAnswer: true,
      },
    });
  }

  async getFromUser(id: string, category: string, skip: number, take: number) {
    let whereCase: any = {
      userId: id,
    }
    
    if (category === 'resolve') {
      whereCase = {
        userId: id,
        isBestAnswer: true,
      }
    }

    const [answers, answersLength, questionsLength, bestAnswersLength] = await Promise.all([
      this.prisma.answer.findMany({
        where: whereCase,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          question: true,
          user: {
            select: {
              id: true,
              name: true,
              lastName: true,
              avatar: true,
            }
          }
        },
        skip,
        take,
      }),
      this.prisma.answer.count({
        where: { userId: id },
      }),
      this.prisma.question.count({
        where: { userId: id },
      }),
      this.prisma.answer.count({
        where: {
          userId: id,
          isBestAnswer: true,
        },
      }),
    ])

    return {
      answers,
      answersLength,
      questionsLength,
      bestAnswersLength,
    };
  }
}
