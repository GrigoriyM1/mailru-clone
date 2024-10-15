import {
	BadRequestException,
	UseInterceptors,
	applyDecorators
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'

export function FileUpload() {
	return applyDecorators(
		UseInterceptors(
			FileInterceptor('file', {
				storage: diskStorage({
					destination: './uploads', // Папка, куда будут сохраняться загрузки
					filename: (req, file, callback) => {
						const uniqueSuffix =
							Date.now() + '-' + Math.round(Math.random() * 1e9)
						callback(null, uniqueSuffix + extname(file.originalname)) // Генерация уникального имени файла
					}
				}),
				fileFilter: (req, file, callback) => {
					// Проверка на тип файла (только изображения)
					const validMimeTypes = [
						'image/jpeg',
						'image/png',
						'image/gif',
						'image/webp',
					]
					if (!validMimeTypes.includes(file.mimetype)) {
						return callback(
							new BadRequestException('Only image files are allowed!'),
							false
						)
					}
					callback(null, true)
				},
				limits: {
					fileSize: 5 * 1024 * 1024 // Ограничение размера файла до 5 МБ
				}
			})
		)
	)
}
