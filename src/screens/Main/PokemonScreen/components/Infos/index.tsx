import React from 'react'
import { View } from 'react-native'

import { IAbout, IEvolution, IStats } from '@services/api/pokemon/types'

import About from './components/About'
import Evolution from './components/Evolution'
import Stats from './components/Stats'
import Tabs, { Tab } from './components/Tabs'
import styles from './styles'

type Props = {
  color: string
  about: IAbout[]
  stats: IStats[]
  evolution: IEvolution[]
}

const Infos = (props: Props) => {
  const { about, color, evolution, stats } = props

  const tabs: Tab[] = [
    {
      name: 'Sobre',
      component: About,
      props: { about },
    },
    {
      name: 'Status',
      component: Stats,
      props: { color, stats },
    },
    {
      name: 'Evolução',
      component: Evolution,
      props: { evolution },
    },
  ]

  return (
    <View style={styles.wrapper}>
      <Tabs tabs={tabs} color={color} />
    </View>
  )
}

export default Infos
