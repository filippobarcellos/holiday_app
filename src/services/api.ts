import axios from 'axios'
import { Holidays } from '../models/Holiday'

const apiClient = axios.create({
  baseURL: 'https://www.gov.uk/bank-holidays.json',
})

async function getHolidays() {
  const { data } = await apiClient.get<Holidays>('/')
  return data
}

export { apiClient, getHolidays }
