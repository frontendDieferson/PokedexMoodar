import { selectType } from '@store/modules/filter/actions'
import { ApplicationState } from '@store/types'
import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Chip from './components/Chip'
import styles from './styles'

const Chips = () => {
  const dispatch = useDispatch()

  const type = useSelector(({ filter }: ApplicationState) => filter.type)

  const removeChip = useCallback(() => {
    dispatch(selectType())
  }, [dispatch])

  return (
    <View style={styles.wrapper}>
      <Chip onPressClose={removeChip}>{type ?? 'Todos'}</Chip>
    </View>
  )
}

export default Chips
