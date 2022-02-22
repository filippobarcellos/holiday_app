import { View } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { Input } from '../Input'

import { formatDate } from '../../utils/dates'

type DatePickerProps = {
  value: string
  onChange: (date: string) => void
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(() => new Date(value))

  useEffect(() => {
    onChange(String(date))
  }, [date])

  const onConfirm = (selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date
    setDate(currentDate!)
    onCancel()
  }

  const onOpen = () => setShow(true)
  const onCancel = () => setShow(false)

  return (
    <View testID='datePicker'>
      <TouchableOpacity onPress={onOpen}>
        <Input
          value={formatDate(value)}
          isDisabled
          label='Date'
          onPressIn={onOpen}
          w='100%'
          _disabled={{ backgroundColor: 'white', color: 'gray.900' }}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        date={date}
        isVisible={show}
        mode='date'
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </View>
  )
}
