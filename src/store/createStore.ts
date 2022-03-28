import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Reducer,
} from 'redux'

export default (reducers: Reducer, middlewares: Middleware[]) => {
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer!(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}
