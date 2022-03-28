import React from 'react'
import { Text, TouchableRipple } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { darken } from 'polished'
import { Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import styles from './styles'
import { IPokemon } from '@services/api/pokemon/types'

type Props = {
  pokemon: IPokemon
}

const Pokemon = (props: Props) => {
  const { pokemon } = props
  const navigation = useNavigation()

  const navigateToPokemonScreen = () => {
    navigation.navigate('PokemonScreen', {
      pokemonId: pokemon.id,
    })
  }

  return (
    <LinearGradient
      colors={pokemon.palete}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <Image
        resizeMode="contain"
        source={{ uri: pokemon.image }}
        style={styles.image}
      />
      <View style={styles.container}>
        <TouchableRipple
          rippleColor={darken(0.4, pokemon.color)}
          onPress={navigateToPokemonScreen}
          style={styles.touchable}
        >
          <View style={styles.label}>
            <Text style={styles.text}>{pokemon.name}</Text>
          </View>
        </TouchableRipple>
      </View>
    </LinearGradient>
  )
}

export default Pokemon
