import React from 'react'
import { renderWithTheme, upComingHolidaysMock } from '@tests/helpers'
import { HolidaysScreen } from './index'

const mockedUpcomingHolidays = upComingHolidaysMock

jest.mock('../../context/holidays', () => {
  return {
    useHolidays: () => ({
      upcomingHolidays: mockedUpcomingHolidays,
    }),
  }
})

describe('HolidaysScreen', () => {
  it('should render properly', () => {
    const screen = renderWithTheme(<HolidaysScreen />)

    expect(screen.getByText('New Year’s Day')).toBeTruthy()
    expect(screen.getByText('Spring bank holiday')).toBeTruthy()
  })
})
