import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { PrismaService } from 'src/prisma.service';
import { EditProfileDto } from './dto/edit-profile.dto';
import { EditProfilePageDto } from './dto/edit-profile-page.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      }
    })
  }
  getByLinkedEmail(linkedEmail: string) {
    return this.prisma.user.findUnique({
      where: {
        linkedEmail,
      }
    })
  }

  async create(dto: RegisterDto) {
    const user = {
      ...dto,
      password: await hash(dto.password)
    }

    return this.prisma.user.create({
      data: user
    })
  }

  async editProfile(dto: EditProfileDto, userId: string) {
    return this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        description: dto.description.trim()
      }
    })
  }

  async editProfilePage(dto: EditProfilePageDto, userId: string) {
    return this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        name: dto.name.trim(),
        lastName: dto.lastName.trim(),
        birthdate: dto.birthdate.trim(),
        gender: dto.gender.trim()
      }
    })
  }

  async editProfileAvatar(file: Express.Multer.File, userId: string) {
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        avatar: `${process.env.SERVER_URL}/uploads/${file.filename}`
      }
    })
    return true
  }
}
