import { BadRequestException, Injectable } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto'
import { PrismaService } from 'src/prisma.service';
import { isTimeUp } from './utils/isTimeUp';
import { AddAdditionalDto } from './dto/add-additional.dto';
import { CATEGORIES } from './constants/categories.constants';

@Injectable()
export class QuestionService {
  private readonly MINUTES_TO_UPDATE = 30

  constructor(
    private prisma: PrismaService,
  ) {}

  async getAll(skip: number, take: number) { 
    return this.prisma.question.findMany({
      skip,
      take,
      include: {
        answers: true,
      }
    });
  }

  async getOne(id: string) {
    return this.prisma.question.findUnique({
      where: {
        id,
      },
    });
  }

  async create(dto: QuestionDto, userId: string) {
		return this.prisma.question.create({
			data: {
				...dto,
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
      data: dto,
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
        }
      });
    }
  }

  async addAdditional(dto: AddAdditionalDto, questionId: string, userId: string) {
    return this.prisma.question.update({
      where: {
        id: questionId
      },
      data: {
        additionals: {
          push: dto.additional
        }
      }
    })
  }

  async getCategories() {
    return CATEGORIES
  }
}
