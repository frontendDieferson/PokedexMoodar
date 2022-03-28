import axios from 'axios'

import api from '@services/api'

import { mapPokemonBasic } from './mappers/mapPokemonBasic'

type Pagination = {
  offset?: number
  limit?: number
}

export interface IPokemon {
  id: number
  name: string
  type: string
  color: string
  image: string
  palete: [string, string, string]
}

const list = async (pagination?: Pagination): Promise<IPokemon[]> => {
  const { limit = 20, offset = 0 } = pagination ?? {}

  return await api
    .get(`pokemon?limit=${limit}&offset=${offset}`)
    .then(async response => {
      return await Promise.all(
        response.data.results.map(async (data: any) => {
          return await axios
            .get(data.url)
            .then(({ data: pokemon }: any) => mapPokemonBasic(pokemon))
        }),
      )
    })
}

export default list
