import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { verify } from 'argon2';

@Injectable()
export class AuthService {
  EXPIRE_DAY_REFRESH_TOKEN = 1;
  REFRESH_TOKEN_NAME = 'refreshToken';

  constructor(
    private jwt: JwtService,
    private userService: UserService,
  ) { }

  async login(dto: LoginDto) {
    const { password, ...user } = await this.validateUser(dto);
    const tokens = this.issueTokens(user.id)


    return {
      user,
      ...tokens
    }
  }

  async register(dto: RegisterDto) {
    const [oldUser, oldUserLinkedEmail] = await Promise.all([
      this.userService.getByEmail(dto.email),
      this.userService.getByLinkedEmail(dto.linkedEmail)
    ]);

    console.log('then next', oldUser, oldUserLinkedEmail, dto.email, dto.linkedEmail)

    const errors: any = {};
    if (oldUser) errors.email = 'Пользователь с таким e-mail уже существует';
    if (oldUserLinkedEmail) errors.linkedEmail = 'Пользователь с таким привязанным e-mail уже существует';

    if (Object.keys(errors).length > 0) {
      throw new BadRequestException({
        message: 'Ошибка валидации',
        errors: errors,
      });
    }

    const { password, ...user } = await this.userService.create(dto);
    console.log('USER2222  ', user)
    const tokens = this.issueTokens(user.id)

    return {
      user,
      ...tokens
    }
  }

  addRefreshTokenToResponse(res: Response, refreshToken: string) {
    const expiresIn = new Date()
    expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

    res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
      httpOnly: true,
      domain: 'localhost',
      expires: expiresIn,
      secure: true,
      sameSite: 'none'
    })
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken)
    if (!result) throw new UnauthorizedException('Invalid refresh token');

    const { password, ...user } = await this.userService.getById(result.id)
    const tokens = this.issueTokens(user.id);

    return {
      user,
      ...tokens,
    };
  }

  private issueTokens(userId: string) {
    const data = { id: userId }

    const accessToken = this.jwt.sign(data, { expiresIn: '1h' })
    const refreshToken = this.jwt.sign(data, { expiresIn: '7d' })

    return {
      accessToken,
      refreshToken
    }
  }

  private async validateUser(dto: LoginDto) {
    const user = await this.userService.getByEmail(dto.email)
    if (!user) throw new BadRequestException('Пользователь с таким e-mail не найден'); // TODO: функция которая ищет errors или message или просто строка
    // TODO: сначала делать запрос с email потом с password

    console.log('VALIDATED  ', user.password, dto.password)
    if (dto.password) {
      const isValid = await verify(user.password, dto.password)
      if (!isValid) throw new BadRequestException('Неверный пароль');
    }

    return user
  }

  removeRefreshTokenFromResponse(res: Response) {
    res.cookie(this.REFRESH_TOKEN_NAME, '', {
      httpOnly: true,
      domain: 'localhost',
      expires: new Date(0),
      secure: true,
      sameSite: 'none',
    });
  }
}
