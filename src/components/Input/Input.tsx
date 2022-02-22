import { FieldError } from 'react-hook-form'
import { Input as NInput, IInputProps, FormControl } from 'native-base'

type InputProps = IInputProps & {
  error?: FieldError
  label: string
}

export function Input({ error, label, ...atributtes }: InputProps) {
  const inputHasError = !!error

  return (
    <FormControl isInvalid={inputHasError}>
      <FormControl.Label>{label}</FormControl.Label>
      <NInput
        size='lg'
        isFullWidth
        color='gray.700'
        mb='2'
        _focus={{ borderColor: 'blue.500' }}
        {...atributtes}
      />
      {inputHasError && (
        <FormControl.ErrorMessage mb='2'>
          {error?.message}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  )
}
