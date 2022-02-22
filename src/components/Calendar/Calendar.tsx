import { theme } from 'native-base'
import { CalendarList } from 'react-native-calendars'

import { MarkedDates } from './types'

type CalendarProps = {
  markedDates: MarkedDates
}

export function Calendar({ ...attributes }: CalendarProps) {
  return (
    <CalendarList
      pastScrollRange={1}
      theme={{
        textDayFontFamily: theme.fonts.body,
        textDayHeaderFontFamily: theme.fonts.heading,
        textDayHeaderFontWeight: 'bold',
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.heading,
        todayTextColor: theme.colors.blue[600],
        monthTextColor: theme.colors.gray[700],
        selectedDayBackgroundColor: theme.colors.blue[600],
      }}
      {...attributes}
    />
  )
}
