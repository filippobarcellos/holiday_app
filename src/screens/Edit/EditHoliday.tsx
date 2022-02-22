import { SafeAreaView, Platform } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  View,
  FormControl,
  Button,
  Text,
  HStack,
  KeyboardAvoidingView,
} from 'native-base'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'

import { Input } from '@components/Input'
import { Switch } from '@components/Switch'
import { DatePicker } from '@components/DatePicker'

import { Holiday } from '@models/Holiday'
import { useHolidays } from '../../context/holidays'
import { RootStackParamList } from '@navigation/navigation'
import { formatDate } from '@utils/dates'
import { editHolidaySchema } from './validator'

type EditHolidayFormData = Holiday

export function EditHolidayScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'EditHoliday'>>()
  const { holiday } = route.params

  const { goBack } = useNavigation()
  const { onHolidayChange } = useHolidays()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<EditHolidayFormData>({
    mode: 'onChange',
    resolver: yupResolver(editHolidaySchema),
    defaultValues: { ...holiday },
  })

  const onSubmit = (data: EditHolidayFormData) => {
    onHolidayChange({
      ...data,
      date: formatDate(data.date, 'yyyy-MM-dd')!,
    })
    goBack()
  }

  return (
    <KeyboardAvoidingView
      flex='1'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View flex='1' bg='white'>
        <SafeAreaView style={{ flex: 1 }}>
          <View
            flex='1'
            bgColor='white'
            alignItems='center'
            px='16px'
            pt='24px'
            borderTopWidth={1}
            borderTopColor='gray.100'
          >
            <FormControl>
              <Controller
                name='title'
                defaultValue=''
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    label='Title'
                    onChangeText={onChange}
                    placeholder='Title'
                    autoCorrect={false}
                    error={errors.title}
                  />
                )}
              />

              <Controller
                name='date'
                defaultValue=''
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker value={value} onChange={onChange} />
                )}
              />

              <HStack
                alignItems='center'
                justifyContent='space-between'
                mt='2'
                mb='2'
              >
                <FormControl.Label>Bunting</FormControl.Label>
                <Controller
                  name='bunting'
                  defaultValue
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Switch value={value} onToggle={() => onChange(!value)} />
                  )}
                />
              </HStack>

              <Controller
                name='notes'
                defaultValue=''
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    label='Notes'
                    onChangeText={onChange}
                    placeholder='Notes'
                    autoCorrect={false}
                    numberOfLines={5}
                    height={120}
                    multiline={true}
                    textAlignVertical='top'
                    error={errors.notes}
                  />
                )}
              />
            </FormControl>

            <Button
              colorScheme='blue'
              w='100%'
              h='50'
              mt='auto'
              mb={Platform.OS === 'ios' ? 0 : 16}
              onPress={handleSubmit(onSubmit)}
              isLoading={isSubmitting}
              disabled={!isValid}
            >
              <Text fontWeight='medium' color='white' fontSize='16'>
                Edit Holiday
              </Text>
            </Button>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  )
}
