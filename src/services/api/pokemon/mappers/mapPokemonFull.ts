import axios from 'axios'

import { IAbout, IPokemonDetail, IStats } from '@services/api/pokemon/types'
import { calculatePokemonHeight } from '@utils/calculatePokemonHeight'
import { getGradient } from '@utils/getGradient'
import { getPokemonGenders } from '@utils/getPokemonGenders'
import { getPokemonImage } from '@utils/getPokemonImage'
import { mapTypeToColor } from '@utils/mapTypeToColor'
import { mapPokemonEvolutions } from './mapPokemonEvolutions'

export const mapPokemonFull = async (pokemon: any) => {
  const { id, name } = pokemon
  const types = pokemon.types.map(({ type }: any) => type.name)
  const color = mapTypeToColor(types[0])
  const image = getPokemonImage(id)
  const palete = getGradient(color)
  const { data: species } = await axios.get(pokemon.species.url)
  const { data: evolutionChain } = await axios.get(species.evolution_chain.url)
  const about: IAbout[] = [
    {
      name: 'Espécie',
      value:
        species.genera.find((item: any) => item.language.name === 'en')
          ?.genus ?? '',
    },
    {
      name: 'Tamanho',
      value: calculatePokemonHeight(pokemon.height),
    },
    {
      name: 'Habilidades',
      value: pokemon.abilities.map((item: any) => {
        return item.is_hidden
          ? `${item.ability.name} (hidden)`
          : item.ability.name
      }),
    },
    {
      name: 'Gênero',
      value: getPokemonGenders(species.gender_rate),
    },
  ]
  const stats: IStats[] = pokemon.stats.map((item: any) => ({
    name: item.stat.name,
    value: item.base_stat,
  }))
  const evolution = await mapPokemonEvolutions([evolutionChain.chain])

  const pokemonFull: IPokemonDetail = {
    id,
    name,
    types,
    color,
    image,
    palete,
    about,
    stats,
    evolution,
  }
  return pokemonFull
}
