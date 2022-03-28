import api from '@services/api'
import { IEvolution } from '@services/api/pokemon/types'

import { mapPokemonBasic } from './mapPokemonBasic'

export const mapPokemonEvolutions = async (evolutionChain: any) => {
  const evolutions: IEvolution[] = await Promise.all(
    evolutionChain.map(async (item: any) => {
      const [, pokemonId] = item.species.url.match(/\/(\d+)\//)
      const response = await api.get(`pokemon/${pokemonId}`)
      const pokemon = mapPokemonBasic(response.data)
      const evolution = await mapPokemonEvolutions(item.evolves_to)

      return {
        ...pokemon,
        evolution,
      }
    }),
  )
  return evolutions
}
