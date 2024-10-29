export type TimeFrame = '' | 'day' | '3days' | 'week' | 'month' | 'year'

export const getTimeFrame = (timeframe: TimeFrame) => {
	const now = new Date()
	let dateThreshold: Date | null = null

	switch (timeframe) {
		case 'day':
			dateThreshold = new Date(now.setDate(now.getDate() - 1))
			break
		case '3days':
			dateThreshold = new Date(now.setDate(now.getDate() - 3))
			break
		case 'week':
			dateThreshold = new Date(now.setDate(now.getDate() - 7))
			break
		case 'month':
			dateThreshold = new Date(now.setMonth(now.getMonth() - 1))
			break
		case 'year':
			dateThreshold = new Date(now.setFullYear(now.getFullYear() - 1))
			break
		default:
			break
	}

	return dateThreshold
}
