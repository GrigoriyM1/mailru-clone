import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async getAll(questionId: string, skip: number, take: number) {  
    return this.prisma.question.findMany({
      skip,
      take, 
      where: {
        id: questionId,
      },
      select: {
        answers: true,
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

  async create(dto: AnswerDto, questionId: string, userId: string) {
    console.log('WORKS HERE  ')

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
}
