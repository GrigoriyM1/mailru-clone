import { UseGuards } from "@nestjs/common";
import { JwtAuthGuarg } from "../guards/jwt.guard";

export const Auth = () => UseGuards(JwtAuthGuarg); // можно свои декораторы делать чтоб сократить