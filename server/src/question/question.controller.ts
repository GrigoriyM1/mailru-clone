import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionDto } from './dto/question.dto'
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  
  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.questionService.getAll(userId);
  }
  
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: QuestionDto, @CurrentUser('id') userId: string) {
    return this.questionService.create(dto, userId);
  }

  @UsePipes(new ValidationPipe())
	@HttpCode(200)
  @Auth()
  @Put(':id')
  async update(
    @Body() dto: QuestionDto,
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.questionService.update(dto, id, userId);
  }

  @UsePipes(new ValidationPipe())
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.questionService.delete(id);
  }
  
  @UsePipes(new ValidationPipe())
  @Patch('like/:id')
  @Auth()
  async like(@Param('id') id: string, @CurrentUser('id') userId: string) {
    return this.questionService.like(id, userId);
  }
}
