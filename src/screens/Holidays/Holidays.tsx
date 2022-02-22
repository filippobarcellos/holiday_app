import * as React from 'react'
import { View } from 'native-base'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Item } from '@components/Item'
import HolidaysLoading from '@components/Loading/HolidayLoading'

import { Holiday } from '@models/Holiday'
import { useHolidays } from '../../context/holidays'

export function HolidaysScreen() {
  const { upcomingHolidays, status } = useHolidays()
  const { navigate } = useNavigation()

  function navigateToEditHoliday(holiday: Holiday) {
    navigate('EditHoliday', { holiday })
  }

  if (status === 'loading') return <HolidaysLoading />

  return (
    <View flex='1' alignItems='center' bg='white'>
      <FlatList
        style={{ flexGrow: 1 }}
        data={upcomingHolidays}
        keyExtractor={(item) => String(item.date)}
        contentContainerStyle={{ marginTop: 24, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item data={item} onPress={() => navigateToEditHoliday(item)} />
        )}
      />
    </View>
  )
}
