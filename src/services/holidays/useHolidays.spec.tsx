import MockAdapter from 'axios-mock-adapter'
import { renderHook, act } from '@testing-library/react-hooks'

import { apiClient } from '../api'
import { holidaysResponseMock, wrapper } from '../../tests/helpers'

import { useGetHolidays } from './useGetHolidays'

const apiMock = new MockAdapter(apiClient)

describe('useHolidays', () => {
  it('should be able fetch the holidays', async () => {
    apiMock.onGet('/').reply(200, holidaysResponseMock)

    const { result, waitForNextUpdate } = renderHook(() => useGetHolidays(), {
      wrapper,
    })

    await act(async () => {
      result.current.refetch()
      await waitForNextUpdate()
    })

    expect(result.current.data).toBeDefined()
    expect(result.current.error).toEqual(null)
    expect(result.current.isLoading).toEqual(false)
  })
})
