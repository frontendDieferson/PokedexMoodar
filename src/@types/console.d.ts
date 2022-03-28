import { SagaMonitor } from '@redux-saga/core'
import { ReactotronReactNative } from 'reactotron-react-native'
import { StoreEnhancer } from 'redux'

declare global {
  interface Console {
    tron: ReactotronReactNative & {
      createEnhancer?: () => StoreEnhancer
      createSagaMonitor?: () => SagaMonitor
    }
  }
}
