import { Controller, Get, Post, Body, Param, Delete, ValidationPipe, UsePipes, Query, Put } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AnswerDto } from './dto/create-answer.dto';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get(':id')
  @Auth()
  async getAll(
    @Param('id') questionId: string,
    @Query('skip') skip: string = '0',
    @Query('take') take: string = '20',
  ) {
    return this.answerService.getAll(questionId, Number(skip), Number(take));
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Post(':id')
  async create(
    @Body() dto: AnswerDto,
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.answerService.create(dto, id, userId);
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Put(':id')
  async update(
    @Body() dto: AnswerDto,
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.answerService.update(dto, id, userId);
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.answerService.delete(id, userId);
  }

  // TODO: like, comment  
}
