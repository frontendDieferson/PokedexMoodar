import { useState } from 'react'

import { listByType } from '@services/api/pokemon'
import { IPokemon } from '@services/api/pokemon/types'

export enum State {
  IDLE,
  LOADING,
  SUCCESS,
  FAILURE,
}

type Result =
  | [State.IDLE, undefined]
  | [State.LOADING, undefined]
  | [State.SUCCESS, IPokemon[]]
  | [State.FAILURE, Error]

export const useListPokemonsByType = () => {
  const [result, setResult] = useState<Result>([State.IDLE, undefined])

  const listPokemonsByType = (type: string) => {
    setResult([State.LOADING, undefined])

    listByType(type)
      .then(response => setResult([State.SUCCESS, response]))
      .catch(error => setResult([State.FAILURE, error]))
  }

  return { listPokemonsByType, result }
}
