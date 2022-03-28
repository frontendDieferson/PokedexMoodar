import { IPokemon } from '@services/api/pokemon/types'
import { getGradient } from '@utils/getGradient'
import { getPokemonImage } from '@utils/getPokemonImage'
import { mapTypeToColor } from '@utils/mapTypeToColor'

export const mapPokemonBasic = (pokemon: any) => {
  const { id, name } = pokemon
  const type = pokemon.types[0].type.name
  const color = mapTypeToColor(type)
  const image = getPokemonImage(id)
  const palete = getGradient(color)

  const pokemonBasic: IPokemon = {
    id,
    name,
    type,
    color,
    image,
    palete,
  }
  return pokemonBasic
}
