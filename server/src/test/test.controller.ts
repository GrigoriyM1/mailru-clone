
import {
  Controller,
  Post,
  UploadedFile,
  HttpCode,
} from '@nestjs/common';
import { FileUpload } from './decorators/test.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('test')
export class TestController {
  @Post('image')
  @FileUpload()
  @Auth()
  @HttpCode(200)
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { filePath: `${process.env.SERVER_URL}/uploads/${file.filename}` };
  }
}
