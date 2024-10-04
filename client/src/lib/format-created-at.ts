import { formatDistance, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatCreatedAt = (dateString: string) => {
    const date = parseISO(dateString); // Преобразуем строку в объект Date
    return formatDistance(date, new Date(), { locale: ru, addSuffix: true });
};
