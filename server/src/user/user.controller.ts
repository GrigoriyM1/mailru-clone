import { GetByEmailDto } from './dto/get-by-email.dto';
import { Body, Controller, HttpCode, Post, Get, Param, Patch, UploadedFile, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { EditProfileDto } from './dto/edit-profile.dto';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { EditProfilePageDto } from './dto/edit-profile-page.dto';
import { FileUpload } from 'src/files/decorators/files.decorator';
import { GetLeadersTime, GetLeadersType } from './types/get-leaders.types';

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

  @Patch('edit-profile-avatar')
  @Auth()
  @FileUpload()
  async editProfileAvatar(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser('id') userId: string,
  ) {
    return this.userService.editProfileAvatar(file, userId)
  }

  @Get('leaders')
  @Auth()
  async getLeaders(
    @Query('time') time: GetLeadersTime = 'week',
    @Query('type') type: GetLeadersType = 'activity',
    @Query('category') category: string,
    @Query('subcategory') subcategory: string,
    @Query('skip') skip: string,
    @Query('take') take: string,
  ) {
    return this.userService.getLeaders(time, type, category, subcategory, Number(skip), Number(take))
  }
}
