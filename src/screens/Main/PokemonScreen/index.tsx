import React from 'react'
import { ScrollView, View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'

import Header from './components/Header'
import Infos from './components/Infos'
import Sprite from './components/Sprite'
import Types from './components/Types'
import styles from './styles'
import { State, useGetPokemon } from './useGetPokemon'

type Props = {
  route: {
    params: {
      pokemonId: number | string
    }
  }
}

const PokemonScreen = (props: Props) => {
  const { pokemonId } = props.route.params
  const result = useGetPokemon(pokemonId)

  switch (result[0]) {
    case State.LOADING:
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      )
    case State.SUCESS: {
      const [, pokemon] = result

      return (
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Header name={pokemon.name} number={pokemon.id} />
          <Types color={pokemon.color} types={pokemon.types} />
          <Sprite colorPalete={pokemon.palete} image={pokemon.image} />
          <Infos
            color={pokemon.color}
            about={pokemon.about}
            stats={pokemon.stats}
            evolution={pokemon.evolution}
          />
        </ScrollView>
      )
    }
    case State.FAILURE:
      return (
        <View style={styles.center}>
          <Text>Pokémon não encontrado 😔</Text>
        </View>
      )
    default:
      return <></>
  }
}

export default PokemonScreen
