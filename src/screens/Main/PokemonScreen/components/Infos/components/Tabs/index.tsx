import React, { useCallback, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

import styles from './styles'

export type Tab = {
  name: string
  component: (args: any) => JSX.Element
  props?: any
}

type Props = {
  color: string
  tabs: Tab[]
}

const Infos = (props: Props) => {
  const { color, tabs } = props

  const [currentTab, setCurrentTab] = useState(0)

  const select = useCallback((index: number) => {
    setCurrentTab(index)
  }, [])

  const Content = useMemo(() => {
    return tabs[currentTab].component
  }, [currentTab, tabs])

  const { selectedStyle } = useMemo(() => {
    return StyleSheet.create({
      selectedStyle: {
        borderBottomColor: color,
        borderBottomWidth: 2,
      },
    })
  }, [color])

  return (
    <View>
      <View style={styles.header}>
        {tabs.map((tab, index) => (
          <Button
            key={tab.name}
            onPress={() => select(index)}
            style={[styles.tab, currentTab === index && selectedStyle]}
            labelStyle={styles.tabText}
          >
            {tab.name}
          </Button>
        ))}
      </View>

      <View>
        <Content {...tabs[currentTab].props} />
      </View>
    </View>
  )
}

export default Infos
