import * as Yup from 'yup'

const editHolidaySchema = Yup.object().shape({
  title: Yup.string().required('Holiday title is a required field'),
  date: Yup.string().required(),
  notes: Yup.string(),
})

export { editHolidaySchema }
