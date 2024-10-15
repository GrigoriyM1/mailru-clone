import { Controller, HttpCode, Post, UploadedFile } from '@nestjs/common';
import { FilesService } from './files.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { FileUpload } from './decorators/files.decorator';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @FileUpload()
  @Auth()
  @HttpCode(200)
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.filesService.uploadFile(file);
  }
}
