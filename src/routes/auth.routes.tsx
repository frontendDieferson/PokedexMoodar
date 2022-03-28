import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import * as Screens from '@screens/Auth'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      AuthScreen: undefined
    }
  }
}

const Stack = createStackNavigator()

const AuthRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AuthScreen" component={Screens.SignIn} />
  </Stack.Navigator>
)

export default AuthRoutes
