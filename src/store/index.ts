import { Store } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import createStore from './createStore'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'
import persistReducers from './persistReducers'
import { ApplicationState } from './types'

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor?.() : undefined

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const middlewares = [sagaMiddleware]

const store: Store<ApplicationState> = createStore(
  persistReducers(rootReducer),
  middlewares,
)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
