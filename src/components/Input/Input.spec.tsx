import React from 'react'
import { renderWithTheme } from '../../tests/helpers'

import { Input } from './index'

const props = {
  placeholder: 'Title',
  defaultValue: 'Easter Monday',
}

describe('Input', () => {
  it('should render properly', () => {
    const screen = renderWithTheme(<Input {...props} />)

    expect(screen.getByPlaceholderText(props.placeholder)).toBeTruthy()
    expect(screen.getByDisplayValue(props.defaultValue)).toBeTruthy()
  })
})
