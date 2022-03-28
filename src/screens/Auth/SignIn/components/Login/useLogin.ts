import axios from 'axios'
import { useState } from 'react'

export enum State {
  IDLE,
  LOADING,
  SUCCESS,
  FAILURE,
}

type User = {
  name: string
  email: string
}

type Result =
  | [State.IDLE, undefined]
  | [State.LOADING, undefined]
  | [State.SUCCESS, User]
  | [State.FAILURE, Error]

export const useLogin = () => {
  const [result, setResult] = useState<Result>([State.IDLE, undefined])

  const signIn = (email: string, password: string) => {
    setResult([State.LOADING, undefined])

    axios
      .post('/api/login', {
        email,
        password,
      })
      .then(({ data }) => setResult([State.SUCCESS, data.user]))
      .catch(error =>
        setResult([State.FAILURE, Error(error.response.data.message)]),
      )
  }

  return { result, signIn }
}
