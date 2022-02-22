import React from 'react'
import { renderWithTheme } from '../../tests/helpers'

import { Item } from './Item'

const holiday = {
  title: 'Easter Holiday',
  date: '2022-02-21',
  notes: '',
  bunting: true,
}

const date_formatted = '21th Feb - Monday'

describe('Item', () => {
  it('should render properly', () => {
    const screen = renderWithTheme(<Item data={holiday} />)

    expect(screen.getByText(holiday.title)).toBeTruthy()
    expect(screen.getByText(date_formatted)).toBeTruthy()
  })
})
