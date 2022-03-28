import { useEffect, useState } from 'react'

import { get } from '@services/api/pokemon'
import { IPokemonDetail } from '@services/api/pokemon/types'

export enum State {
  IDLE,
  LOADING,
  SUCESS,
  FAILURE,
}

type Result =
  | [State.IDLE, undefined]
  | [State.LOADING, undefined]
  | [State.SUCESS, IPokemonDetail]
  | [State.FAILURE, Error]

export const useGetPokemon = (id: number | string) => {
  const [result, setResult] = useState<Result>([State.IDLE, undefined])

  useEffect(() => {
    setResult([State.LOADING, undefined])

    get(id)
      .then(response => setResult([State.SUCESS, response]))
      .catch(error => setResult([State.FAILURE, error]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return result
}
