import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import {
  Card,
  TextInput,
  Button,
  HelperText,
  Colors,
  Text,
} from 'react-native-paper'
import Snackbar from 'react-native-snackbar'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'

import * as actions from '@store/modules/auth/actions'

import styles from './styles'
import { State, useLogin } from './useLogin'

const Login = () => {
  const dispatch = useDispatch()
  const { result, signIn } = useLogin()

  const passwordRef = useRef<RNTextInput>(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [errors, setErrors] = useState({
    hasError: false,
    email: '',
    password: '',
  })

  const isLoading = useMemo(() => {
    return result[0] === State.LOADING
  }, [result])

  useEffect(() => {
    switch (result[0]) {
      case State.SUCCESS: {
        const [, user] = result
        Snackbar.show({
          text: `Login realizado por ${user.name}`,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: Colors.green500,
        })
        dispatch(actions.signIn(user))
        break
      }
      case State.FAILURE: {
        const [, error] = result
        Snackbar.show({
          text: error.message,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: Colors.red500,
        })
        break
      }
      default:
    }
  }, [dispatch, result])

  const toggleVisibility = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  const cleanErrors = useCallback(() => {
    setErrors({
      hasError: false,
      email: '',
      password: '',
    })
  }, [])

  const setError = useCallback((field: 'email' | 'password', error: string) => {
    setErrors(e => ({
      ...e,
      hasError: true,
      [field]: error,
    }))
  }, [])

  const validateInputs = async () => {
    let isValid = true

    await yup
      .string()
      .email('Email inválido')
      .required('O email é obrigatório')
      .validate(email)
      .catch(error => {
        isValid = false
        setError('email', error.errors[0])
      })

    await yup
      .string()
      .min(6, 'A senha precisa conter pelo menos 6 caracteres')
      .required('A senha é obrigatória')
      .validate(password)
      .catch(error => {
        isValid = false
        setError('password', error.errors[0])
      })

    return isValid
  }

  const handleSubmit = async () => {
    if (isLoading) {
      return
    }

    cleanErrors()
    const valid = await validateInputs()
    if (valid) {
      signIn(email, password)
    }
  }

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Card.Title
          title="Bem vindo"
          subtitle="insira os seus dados para acessar"
          titleStyle={styles.titleStyle}
        />

        <TextInput
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        {errors.hasError && !!errors.email && (
          <HelperText
            type="error"
            visible={!!errors.email}
            style={styles.error}
          >
            {errors.email}
          </HelperText>
        )}

        <TextInput
          ref={passwordRef}
          label="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={nextValue => setPassword(nextValue)}
          secureTextEntry={!visible}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          style={styles.input}
          right={
            <TextInput.Icon
              name={visible ? 'eye' : 'eye-off'}
              onPress={toggleVisibility}
            />
          }
        />
        {errors.hasError && !!errors.password && (
          <HelperText
            type="error"
            visible={!!errors.password}
            style={styles.error}
          >
            {errors.password}
          </HelperText>
        )}

        <Button
          mode="contained"
          loading={isLoading}
          disabled={isLoading}
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Login
