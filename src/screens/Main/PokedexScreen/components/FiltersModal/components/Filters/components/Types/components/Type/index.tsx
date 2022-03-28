import { lighten } from 'polished'
import React, { useMemo } from 'react'
import { Text, TouchableRipple } from 'react-native-paper'

import styles from './styles'

type Props = {
  children: string
  selected?: string
  onPress?(): void
}

const Type = (props: Props) => {
  const { children, selected, onPress } = props

  const isSelected = useMemo(() => {
    if (!selected && children === 'Todos') {
      return true
    }
    if (children === selected) {
      return true
    }
    return false
  }, [children, selected])

  return (
    <TouchableRipple
      rippleColor={lighten(0.3, '#2E6EB5')}
      onPress={onPress}
      style={[styles.button, isSelected && styles.buttonSelected]}
    >
      <Text style={[styles.text, isSelected && styles.textSelected]}>
        {children}
      </Text>
    </TouchableRipple>
  )
}

export default Type
