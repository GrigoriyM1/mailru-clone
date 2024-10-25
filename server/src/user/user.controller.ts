import { GetByEmailDto } from './dto/get-by-email.dto';
import { Body, Controller, HttpCode, Post, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { EditProfileDto } from './dto/edit-profile.dto';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { EditProfilePageDto } from './dto/edit-profile-page.dto';

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

  @Get(':id')
  @Auth()
  @HttpCode(200)
  async getById(@Param('id') id: string) {
    const data = await this.userService.getById(id)
    return data
  }

  @Patch('edit-profile')
  @Auth()
  async editProfile(
    @Body() dto: EditProfileDto,
    @CurrentUser('id') userId: string, 
  ) {
    const data = await this.userService.editProfile(dto, userId)
    return data
  }

  @Patch('edit-profile-page')
  @Auth()
  async editProfilePage(
    @Body() dto: EditProfilePageDto,
    @CurrentUser('id') userId: string, 
  ) {
    const data = await this.userService.editProfilePage(dto, userId)
    return data
  }
}
