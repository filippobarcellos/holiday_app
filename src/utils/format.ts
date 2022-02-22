import _ from 'lodash'

import { Holidays } from '@models/Holiday'

import { isBetween } from './dates'
import { Holiday } from '../models/Holiday'

function getHolidaysWithinSixMonths(data: Holiday[]) {
  return data.filter((event) => isBetween(event.date)).slice(0, 5)
}

function generateHolidaysArr(data: Holidays): Holiday[] {
  return _.chain(data)
    .flatMap('events')
    .uniqBy((event) => event.title + event.date)
    .sortBy((event) => event.date)
    .value()
    .map((value, index) => ({ ...value, id: index + 1 }))
}

export { getHolidaysWithinSixMonths, generateHolidaysArr }
