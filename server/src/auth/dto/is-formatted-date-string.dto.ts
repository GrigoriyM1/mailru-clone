import {
	ValidationArguments,
	ValidationOptions,
	registerDecorator
} from 'class-validator'
import * as moment from 'moment'

// форматирует через moment и только потом валидиует

export function IsFormattedDateString(validationOptions?: ValidationOptions) {
	return function (object: Object, propertyName: string) {
		registerDecorator({
			name: 'isFormattedDateString',
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: {
				validate(value: any, args: ValidationArguments) {
					if (typeof value !== 'string' || !value) {
						return false // Если значение не строка или пусто
					}

					const formattedDate = moment(value, 'YYYY-MM-DD', true)
					// Проверка на валидность даты
					return formattedDate.isValid() && formattedDate.format() === value
				},
				defaultMessage(args: ValidationArguments) {
					return 'Укажите корректную дату рождения'
				}
			}
		})
	}
}
