import { GetByEmailDto } from './dto/get-by-email.dto';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('get-by-email')
  @HttpCode(200)
  async getByEmail(
    @Body() { email }: GetByEmailDto
  ) {
    const data = await this.userService.getByEmail(email)
    return data ? true : false
  }
}
