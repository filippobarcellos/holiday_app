import { useMemo } from 'react'
import { Dimensions } from 'react-native'
import { Button, IButtonProps, Text } from 'native-base'

import { Holiday } from '@models/Holiday'
import { formatDatePretty } from '@utils/dates'

const width = Dimensions.get('window').width

type ItemProps = IButtonProps & {
  data: Holiday
}

export function Item({ data, ...atributtes }: ItemProps) {
  const dt_formatted = useMemo(
    () => formatDatePretty(data.date).split(',').join(''),
    []
  )

  return (
    <Button.Group isAttached colorScheme='blue' mb={4} w={width - 32}>
      <Button flex='1' maxW='80' {...atributtes}>
        <Text color='white' fontWeight='bold' textAlign='center'>
          {dt_formatted}
        </Text>
      </Button>
      <Button variant='outline' style={{ flex: 1 }} {...atributtes}>
        <Text color='gray.800'>{data.title}</Text>
      </Button>
    </Button.Group>
  )
}
