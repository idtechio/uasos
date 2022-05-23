import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuthentication } from 'app/features/auth/AuthContext'

import { AuthNavigator } from './AuthNavigator'
import { HomeNavigator } from './HomeNavigator'

const Stack = createNativeStackNavigator<{
  'auth-stack': undefined
  'home-stack': undefined
}>()

export function NativeNavigation() {
  const { user } = useAuthentication()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="auth-stack" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="home-stack" component={HomeNavigator} />
      )}
    </Stack.Navigator>
  )
}
