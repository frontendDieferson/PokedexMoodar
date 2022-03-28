import React from 'react'
import { View } from 'react-native'
import { Badge, Chip as PaperChip } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

type Props = {
  children: string
  onPressClose?: () => void
}

const Chip = (props: Props) => {
  const { children, onPressClose } = props

  return (
    <View style={styles.view}>
      <PaperChip style={styles.chip} textStyle={styles.text}>
        {children}
      </PaperChip>
      <Badge visible style={styles.badge} onPress={onPressClose}>
        {(<Icon name="close" color="white" size={10} />) as any}
      </Badge>
    </View>
  )
}

export default Chip
