import React from 'react'
import { FlatList } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import Snackbar from 'react-native-snackbar'

import Type from './components/Type'
import styles from './styles'
import { State, useListTypes } from './useListTypes'

type Props = {
  onPress(type: string | undefined): void
  selected: string | undefined
}

const Types = (props: Props) => {
  const { onPress, selected } = props
  const result = useListTypes()

  switch (result[0]) {
    case State.LOADING: {
      return <ActivityIndicator />
    }
    case State.SUCCESS: {
      const [, types] = result

      return (
        <FlatList
          style={styles.container}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={['Todos', ...types]}
          keyExtractor={type => type}
          renderItem={({ item }) => (
            <Type
              onPress={() => onPress(item !== 'Todos' ? item : undefined)}
              selected={selected}
            >
              {item}
            </Type>
          )}
        />
      )
    }
    case State.FAILURE: {
      const [, error] = result
      Snackbar.show({
        text: error.message,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.red500,
      })
      return null
    }
    default:
      return null
  }
}

export default Types
