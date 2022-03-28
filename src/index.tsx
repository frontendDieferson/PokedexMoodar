import '@config/reactotronConfig'

import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from '@routes'
import { persistor, store } from '@store/index'
import { DefaultTheme } from '@theme'

const App = () => (
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <PaperProvider theme={DefaultTheme as ReactNativePaper.Theme}>
        <Routes />
      </PaperProvider>
    </PersistGate>
  </StoreProvider>
)

export default App
