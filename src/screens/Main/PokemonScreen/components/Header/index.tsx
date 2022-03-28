import React, { useMemo } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import styles from './styles'

type Props = {
  name: string
  number: number
}

const Header = (props: Props) => {
  const { name, number } = props

  const numberFormated = useMemo(() => {
    return `#${number.toString().padStart(3, '0')}`
  }, [number])

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.number}>{numberFormated}</Text>
    </View>
  )
}

export default Header
