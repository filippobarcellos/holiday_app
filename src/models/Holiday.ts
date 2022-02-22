type Division = 'england-and-wales' | 'scotland' | 'nothern-ireland'

type Holiday = {
  id?: number
  title: string
  date: string
  notes: string
  bunting: boolean
}

type Holidays = {
  [key in Division]: {
    division: Division
    events: Holiday[]
  }
}

export { Holiday, Holidays }
