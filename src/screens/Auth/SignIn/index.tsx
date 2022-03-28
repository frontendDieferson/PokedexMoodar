import React, { useCallback } from 'react'
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  View,
} from 'react-native'

import bg from '@assets/background.png'
import logo from '@assets/logo.png'

import Login from './components/Login'
import styles from './styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const SignIn = () => {
  const dismiss = useCallback(() => {
    Keyboard.dismiss()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ImageBackground style={styles.conteiner} source={bg}>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />

          <View style={styles.view}>
            <Image source={logo} resizeMode="contain" style={styles.logo} />
          </View>

          <Login />
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default SignIn
