import React from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

type Props = {
  colorPalete: [string, string, string]
  image: string
}

const Sprite = (props: Props) => {
  const { colorPalete, image } = props

  return (
    <View>
      <LinearGradient
        colors={colorPalete}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      />
      <Image
        resizeMode="contain"
        source={{ uri: image }}
        style={styles.image}
      />
    </View>
  )
}

export default Sprite
