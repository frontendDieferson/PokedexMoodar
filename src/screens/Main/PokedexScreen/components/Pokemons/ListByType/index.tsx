import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import Snackbar from 'react-native-snackbar'
import { ActivityIndicator, Colors } from 'react-native-paper'

import { IPokemon } from '@services/api/pokemon/types'

import Pokemon from '../components/Pokemon'
import styles from './styles'
import { State, useListPokemonsByType } from './useListPokemonsByType'

type Props = {
  type: string
}

const Pokemons = (props: Props) => {
  const { type } = props
  const { result, listPokemonsByType } = useListPokemonsByType()

  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    listPokemonsByType(type)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  useEffect(() => {
    switch (result[0]) {
      case State.SUCCESS: {
        const [, newPokemons] = result
        setPokemons(newPokemons)
        break
      }
      case State.FAILURE: {
        Snackbar.show({
          text: 'Ocorreu um erro ao listar os Pokémons',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: Colors.red500,
        })
        break
      }
    }
  }, [result])

  if (result[0] === State.LOADING) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={pokemons}
      keyExtractor={pokemon => pokemon.name}
      renderItem={({ item }) => <Pokemon pokemon={item} />}
    />
  )
}

export default Pokemons
