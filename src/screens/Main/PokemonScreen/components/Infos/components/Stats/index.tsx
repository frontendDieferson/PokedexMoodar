import { calculateStatPercentage } from '@utils/calculateStatPercentage'
import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { IStats } from '@services/api/pokemon/types'

import styles from './styles'

type Props = {
  color: string
  stats: IStats[]
}

const Stats = (props: Props) => {
  const { color, stats = [] } = props

  return (
    <View>
      {stats.map(stat => (
        <View key={stat.name} style={styles.wrapper}>
          <Text style={styles.label}>{stat.name}</Text>
          <View style={styles.bar}>
            <View
              style={[
                styles.bar,
                {
                  width: `${calculateStatPercentage(stat.value)}%`,
                  backgroundColor: color,
                },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  )
}

export default Stats
