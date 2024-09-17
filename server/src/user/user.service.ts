import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      // include: {
      //   // весь user вместо с его tasks
      //   tasks: true,
      // },
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

    console.log('user  ', user)

    return this.prisma.user.create({
      data: user
    })
  }
}
