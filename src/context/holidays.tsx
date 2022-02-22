import { useState, useContext, createContext, useEffect } from 'react'

import { Holiday } from '@models/holiday'
import { useGetHolidays } from '@services/index'
import { getHolidaysWithinSixMonths } from '@utils/format'

type HolidaysContextData = {
  holidays: Holiday[]
  upcomingHolidays: Holiday[]
  onHolidayChange: (data: Holiday) => void
  status: 'idle' | 'error' | 'loading' | 'success'
}

type HolidaysProviderProps = {
  children: React.ReactNode
}

const HolidaysContext = createContext({} as HolidaysContextData)

const HolidaysProvider = ({ children }: HolidaysProviderProps) => {
  const [holidays, setHolidays] = useState<Holiday[]>([])
  const [upcomingHolidays, setUpcomingHolidays] = useState<Holiday[]>([])

  const { data, status } = useGetHolidays()

  useEffect(() => {
    if (data) {
      setHolidays(data)
    }
  }, [data])

  useEffect(() => {
    const upcomingHolidays = getHolidaysWithinSixMonths(holidays)
    onUpcomingHolidaysChange(upcomingHolidays)
  }, [holidays])

  const onUpcomingHolidaysChange = (data: Holiday[]) => {
    setUpcomingHolidays(data)
  }

  const onHolidayChange = (data: Holiday) => {
    setHolidays((previousState) =>
      previousState.map((i) => {
        if (i.id === data.id) {
          return {
            ...i,
            ...data,
          }
        }
        return i
      })
    )
  }

  return (
    <HolidaysContext.Provider
      value={{ holidays, upcomingHolidays, status, onHolidayChange }}
    >
      {children}
    </HolidaysContext.Provider>
  )
}

const useHolidays = () => {
  const context = useContext(HolidaysContext)

  if (!context) {
    throw new Error('useHolidays must be used within a HolidaysProvider')
  }

  return context
}

export { HolidaysProvider, useHolidays, HolidaysContext }
