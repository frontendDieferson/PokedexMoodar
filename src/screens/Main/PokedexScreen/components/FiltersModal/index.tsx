import React, { useCallback, useState, useImperativeHandle } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'

import Filters from './components/Filters'
import styles from './styles'

export type FiltersModalRef = {
  close(): void
  show(): void
}

const FiltersModal = React.forwardRef<FiltersModalRef>((_props, ref) => {
  const [isVisible, setIsVisible] = useState(false)

  const close = useCallback(() => {
    setIsVisible(false)
  }, [])

  const show = useCallback(() => {
    setIsVisible(true)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      close,
      show,
    }),
    [close, show],
  )

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.3}
      swipeDirection="right"
      animationIn="slideInRight"
      animationOut="slideOutRight"
      onSwipeComplete={close}
      propagateSwipe
      style={styles.modal}
    >
      <View style={styles.container}>
        <Filters closeModal={close} />
      </View>
    </Modal>
  )
})

export default FiltersModal
