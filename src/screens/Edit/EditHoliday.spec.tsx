import React from 'react'

import { EditHolidayScreen } from '../index'
import { renderWithTheme, upComingHolidaysMock } from '@tests/helpers'

const mockedUpcomingHolidays = upComingHolidaysMock

jest.mock('../../context/holidays', () => {
  return {
    useHolidays: () => ({
      upcomingHolidays: mockedUpcomingHolidays,
    }),
  }
})

const mockNavigate = jest.fn()
const mockGoBack = jest.fn()

jest.mock('@react-navigation/native', () => {
  const navigate = jest.requireActual('@react-navigation/native')
  return {
    ...navigate,
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack,
    }),
    useRoute: () => ({
      params: {
        holiday: 'example',
      },
    }),
  }
})

describe('EditHolidayScreen', () => {
  it('should render properly', () => {
    const screen = renderWithTheme(<EditHolidayScreen />)

    expect(screen.getByPlaceholderText('Title')).toBeTruthy()
    expect(screen.getByText('Notes')).toBeTruthy()
    expect(screen.getByTestId('datePicker')).toBeTruthy()
    expect(screen.getByTestId('switch')).toBeTruthy()
  })
})
