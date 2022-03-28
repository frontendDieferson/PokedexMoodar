import api from '@services/api'

import { mapPokemonFull } from './mappers/mapPokemonFull'
import { IPokemonDetail } from './types'

const getByName = async (name: string): Promise<IPokemonDetail> => {
  return await api
    .get(`pokemon/${name}`)
    .then(({ data: pokemon }: any) => mapPokemonFull(pokemon))
}

export default getByName
