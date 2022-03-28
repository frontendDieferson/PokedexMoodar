import axios from 'axios'

import api from '@services/api'

import { IPokemon } from './list'
import { mapPokemonBasic } from './mappers/mapPokemonBasic'

const listByType = async (type: string): Promise<IPokemon[]> => {
  return await api.get(`type/${type}`).then(async response => {
    return await Promise.all(
      response.data.pokemon.map(async (data: any) => {
        return await axios
          .get(data.pokemon.url)
          .then(({ data: pokemon }: any) => mapPokemonBasic(pokemon))
      }),
    )
  })
}

export default listByType
