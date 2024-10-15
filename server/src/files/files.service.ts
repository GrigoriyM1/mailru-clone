import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  async uploadFile(file: Express.Multer.File) {
    return { filePath: `${process.env.SERVER_URL}/uploads/${file.filename}` };
  }
}
