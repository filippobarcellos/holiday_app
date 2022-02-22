import * as React from 'react'
import { theme } from 'native-base'
import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HolidaysScreen, CalendarScreen } from '@screens/index'

import { RootTabParamList } from './navigation'

const BottomTab = createBottomTabNavigator<RootTabParamList>()

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Holidays'
      screenOptions={{
        tabBarActiveTintColor: theme.colors.blue[500],
        tabBarInactiveTintColor: theme.colors.gray[700],
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'android' ? 70 : 80,
        },
      }}
    >
      <BottomTab.Screen
        name='Holidays'
        component={HolidaysScreen}
        options={{
          headerTitle: 'Upcoming Holidays',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Calendar'
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='calendar' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name']
  color: string
}) {
  return <Feather size={30} style={{ marginBottom: -3 }} {...props} />
}
