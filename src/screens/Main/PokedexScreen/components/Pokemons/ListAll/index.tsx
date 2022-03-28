import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import { State, useListPokemons } from './useListPokemons'
import Snackbar from 'react-native-snackbar'

import { IPokemon } from '@services/api/pokemon/types'

import Pokemon from '../components/Pokemon'
import styles from './styles'

const Pokemons = () => {
  const { result, listPokemons } = useListPokemons()

  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    listPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    switch (result[0]) {
      case State.SUCCESS: {
        const [, newPokemons] = result
        setPokemons(p => [...p, ...newPokemons])
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

  const renderFooter = () => {
    if (result[0] !== State.LOADING) {
      return null
    }
    return (
      <View style={styles.loading}>
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
      onEndReached={listPokemons}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
    />
  )
}

export default Pokemons
