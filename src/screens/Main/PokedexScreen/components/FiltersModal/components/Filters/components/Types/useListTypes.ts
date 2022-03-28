import { list } from '@services/api/types'
import { useEffect, useState } from 'react'

export enum State {
  IDLE,
  LOADING,
  SUCCESS,
  FAILURE,
}

type Result =
  | [State.IDLE, undefined]
  | [State.LOADING, undefined]
  | [State.SUCCESS, string[]]
  | [State.FAILURE, Error]

export const useListTypes = () => {
  const [result, setResult] = useState<Result>([State.IDLE, undefined])

  useEffect(() => {
    setResult([State.LOADING, undefined])

    list()
      .then(types => setResult([State.SUCCESS, types]))
      .catch(() =>
        setResult([State.FAILURE, Error('Não foi possível carregar os tipos')]),
      )
  }, [])

  return result
}
