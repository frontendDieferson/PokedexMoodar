import React from 'react'
import { View } from 'react-native'
import { Chip } from 'react-native-paper'

import styles from './styles'

type Props = {
  color: string
  types: string[]
}

const Types = (props: Props) => {
  const { color, types = [] } = props

  return (
    <View style={styles.wrapper}>
      {types.map(type => (
        <Chip
          key={type}
          style={[styles.chip, { backgroundColor: color }]}
          textStyle={styles.text}
        >
          {type}
        </Chip>
      ))}
    </View>
  )
}

export default Types
