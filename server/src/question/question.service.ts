import { Injectable } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto'
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QuestionService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async getAll(userId: string) {
    return this.prisma.question.findMany({
      where: {
        userId
      }
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
    return this.prisma.question.update({
      where: {
        userId,
        id: questionId
      },
      data: dto
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
}
