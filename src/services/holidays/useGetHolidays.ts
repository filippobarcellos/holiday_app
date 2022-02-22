import _ from 'lodash'
import { useQuery } from 'react-query'

import { getHolidays } from '../api'
import { generateHolidaysArr } from '@utils/format'

function useGetHolidays() {
  return useQuery('holidays', getHolidays, {
    staleTime: Infinity,
    select: generateHolidaysArr,
    onError: (error) => console.log(error),
  })
}

export { useGetHolidays }
