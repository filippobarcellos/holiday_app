import React from 'react'
import { fireEvent, act } from '@testing-library/react-native'
import { renderWithTheme } from '../../tests/helpers'

import { Switch } from './index'

const mockedOnChange = jest.fn()
const mockedToggle = jest.fn()

const props = {
  value: false,
  onChange: mockedOnChange,
}

describe('Switch', () => {
  it('should render properly', () => {
    const screen = renderWithTheme(<Switch {...props} />)

    const switchComp = screen.getByRole('switch')

    expect(switchComp).toBeTruthy()
    expect(switchComp.props.value).toBe(false)
  })

  // it('should handle onToggle function', async () => {
  //   const screen = renderWithTheme(
  //     <Switch {...props} onToggle={mockedToggle} />
  //   )

  //   const switchComp = screen.getByRole('switch')

  //   await act(async () => {
  //     fireEvent(switchComp, 'onToggle', true)
  //   })

  //   expect(mockedToggle).toHaveBeenCalledTimes(1)
  //   expect(switchComp.props.value).toBe(true)

  //   await act(async () => {
  //     fireEvent(switchComp, 'onToggle', true)
  //   })

  //   expect(mockedToggle).toHaveBeenCalledTimes(2)
  //   expect(switchComp.props.value).toBe(false)
  // })
})
