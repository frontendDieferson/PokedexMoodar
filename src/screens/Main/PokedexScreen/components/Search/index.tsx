import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

import styles from './styles'

const Search = () => {
  const navigation = useNavigation()

  const [text, setText] = useState('')

  const navigateToPokemonScreen = () => {
    navigation.navigate('PokemonScreen', {
      pokemonId: text.toLowerCase(),
    })
  }

  return (
    <TextInput
      mode="outlined"
      placeholder="Buscar Pokémon"
      theme={{ colors: { background: '#E5E5E5' }, roundness: 30 }}
      outlineColor="#E5E5E5"
      returnKeyType="search"
      onSubmitEditing={navigateToPokemonScreen}
      style={styles.search}
      value={text}
      onChangeText={setText}
    />
  )
}

export default Search
