import 'react-native-gesture-handler'

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ApplicationState } from '@store/types'
import { DefaultTheme } from '@theme'

import AuthRoutes from './auth.routes'
import MainRoutes from './main.routes'
import createServer from '@server/app'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      AuthRoutes: undefined
      MainRoutes: undefined
    }
  }
}

const Stack = createStackNavigator()

function Routes() {
  const signed = useSelector((state: ApplicationState) => state.auth.signed)

  useEffect(() => {
    const server = createServer()

    if (signed) {
      server.shutdown()
    }

    return () => {
      server.shutdown()
    }
  }, [signed])

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {signed ? (
          <Stack.Screen name="MainRoutes" component={MainRoutes} />
        ) : (
          <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
