import { format, addMonths, isWithinInterval, parseISO } from 'date-fns'

function formatDate(date: Date | string, options?: string) {
  if (!date) return
  const parsedDate = new Date(date)
  return format(parsedDate, options || 'dd-MM-yyyy')
}

function formatDatePretty(date: string) {
  const parsedDate = new Date(parseISO(date))
  return format(parsedDate, `dd'th', MMM, - eeee`)
}

function getSixMonthsFromToday() {
  const today = new Date()
  return addMonths(today, 6)
}

function isBetween(date: string | Date) {
  return isWithinInterval(new Date(date), {
    start: new Date(),
    end: getSixMonthsFromToday(),
  })
}

function generateMarkedDates(data: any[]) {
  return data.reduce((acc, item) => {
    acc[item.date] = { selected: true, disabledTouchEvent: true }
    return acc
  }, {})
}

export {
  formatDate,
  formatDatePretty,
  getSixMonthsFromToday,
  isBetween,
  generateMarkedDates,
}
