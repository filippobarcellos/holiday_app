import { Platform } from 'react-native'
import { Switch as NSwitch, ISwitchProps } from 'native-base'

type SwitchProps = ISwitchProps & {
  value: boolean
}

export function Switch({ value, ...atributtes }: SwitchProps) {
  return (
    <NSwitch
      colorScheme='blue'
      value={value}
      size={Platform.OS === 'ios' ? 'sm' : 'md'}
      isChecked={value}
      testID='switch'
      {...atributtes}
    />
  )
}
