import api from '@services/api'
import { IPokemon } from './list'

import { mapPokemonFull } from './mappers/mapPokemonFull'

export interface IAbout {
  name: string
  value: string | string[]
}

export interface IStats {
  name: string
  value: number
}

export type IEvolution = Record<'evolution', IEvolution[]> & IPokemon

export interface IPokemonDetail {
  id: number
  name: string
  types: string[]
  color: string
  image: string
  palete: [string, string, string]
  about: IAbout[]
  stats: IStats[]
  evolution: IEvolution[]
}

const get = async (id: number | string): Promise<IPokemonDetail> => {
  return await api
    .get(`pokemon/${id}`)
    .then(({ data: pokemon }: any) => mapPokemonFull(pokemon))
}

export default get
