import { AuthGuard } from "@nestjs/passport";

export class JwtAuthGuarg extends AuthGuard('jwt') {}