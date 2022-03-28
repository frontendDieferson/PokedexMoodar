import React, { useCallback } from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Text, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IEvolution } from '@services/api/pokemon/types'

import styles from './styles'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  evolution: IEvolution[]
}

const Evolution = (props: Props) => {
  const { evolution = [] } = props
  const navigation = useNavigation<StackNavigationProp<any>>()

  const navigateToPokemonScreen = useCallback(
    (pokemonId: number) => {
      navigation.push('PokemonScreen', {
        pokemonId,
      })
    },
    [navigation],
  )

  const renderEvolutions = (
    pokemons: IEvolution[],
    root = false,
  ): JSX.Element => {
    const nextEvolutions: IEvolution['evolution'][] = []

    return (
      <>
        {!root && (
          <View>
            {pokemons.map(() => (
              <View style={styles.icon}>
                <Icon name="arrow-right-bold" size={24} />
              </View>
            ))}
          </View>
        )}

        <View>
          {pokemons.map(pokemon => {
            if (pokemon.evolution.length) {
              nextEvolutions.push(pokemon.evolution)
            }

            return (
              <LinearGradient
                key={pokemon.id}
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
                <View style={styles.wrapper}>
                  <TouchableRipple
                    onPress={() => navigateToPokemonScreen(pokemon.id)}
                    style={styles.touchable}
                  >
                    <Text style={styles.label}>{pokemon.name}</Text>
                  </TouchableRipple>
                </View>
              </LinearGradient>
            )
          })}
        </View>
        {nextEvolutions.map(next => renderEvolutions(next))}
      </>
    )
  }

  return (
    <View style={styles.container}>{renderEvolutions(evolution, true)}</View>
  )
}

export default Evolution
