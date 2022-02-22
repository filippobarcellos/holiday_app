import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { EditHolidayScreen } from '@screens/index'
import { RootStackParamList } from './navigation'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='EditHoliday'
        component={EditHolidayScreen}
        options={({ route }) => {
          return {
            headerTitle: route.params.holiday.title,
            headerShadowVisible: true,
          }
        }}
      />
    </Stack.Navigator>
  )
}
