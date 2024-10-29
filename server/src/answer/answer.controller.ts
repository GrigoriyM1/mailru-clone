import { Controller, Get, Post, Body, Param, Delete, ValidationPipe, UsePipes, Query, Put } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AnswerDto } from './dto/answer.dto';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { CommentDto } from './dto/comment.dto';
import { BestAnswerDto } from './dto/best-answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) { }

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

  @UsePipes(new ValidationPipe())
  @Auth()
  @Put('/like/:id')
  async like(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.answerService.like(id, userId);
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Put('/comment/:id')
  async comment(
    @Body() dto: CommentDto,
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.answerService.comment(dto, id, userId);
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Put('/best-answer/:id')
  async bestAnswer(
    @Body() dto: BestAnswerDto,
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.answerService.bestAnswer(dto, id, userId);
  }

  @Get('user/:id/:category')
  @Auth()
  async getFromUser(
    @Param('id') id: string, 
    @Param('category') category: string, 
    @Query('skip') skip: string = '0',
    @Query('take') take: string = '20',
  ) {
    return this.answerService.getFromUser(id, category, Number(skip), Number(take));
  }
}
