import { useState } from 'react'
import { View } from 'native-base'

import { Calendar } from '../components/Calendar'
import CalendarLoading from '../components/Loading/CalendarLoading'

import { generateMarkedDates } from '../utils/dates'
import { useHolidays } from '../context/holidays'

export function CalendarScreen() {
  const { upcomingHolidays, status } = useHolidays()
  const [markedDates] = useState(() => generateMarkedDates(upcomingHolidays))

  if (status === 'loading') return <CalendarLoading />

  return (
    <View flex='1' bg='white'>
      <Calendar markedDates={markedDates} />
    </View>
  )
}
