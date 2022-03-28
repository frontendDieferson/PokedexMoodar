import { useState } from 'react'

import { list } from '@services/api/pokemon'
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

export const useListPokemons = () => {
  const [result, setResult] = useState<Result>([State.IDLE, undefined])
  const [offset, setOffset] = useState(0)

  const listPokemons = () => {
    setResult([State.LOADING, undefined])
    setOffset(value => value + 20)

    list({ offset })
      .then(response => setResult([State.SUCCESS, response]))
      .catch(error => setResult([State.FAILURE, error]))
  }

  return { listPokemons, result }
}
