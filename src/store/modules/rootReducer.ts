import { combineReducers, Reducer } from 'redux'

import { ApplicationState } from '@store/types'

import auth from './auth/reducer'
import { AuthTypes } from './auth/types'
import filter from './filter/reducer'

type Reducers = keyof ApplicationState

const appReducer = combineReducers({
  auth,
  filter,
})

const blacklist: Reducers[] = []

const rootReducer: Reducer<ApplicationState> = (state, action) => {
  if (action.type === AuthTypes.SIGN_OUT_SUCCESS) {
    const reducers = Object.keys(state as ApplicationState) as Reducers[]

    reducers.forEach(reducer => {
      if (!blacklist.includes(reducer)) {
        if (state) {
          state[reducer as keyof ApplicationState] = undefined as any
        }
      }
    })
  }

  return appReducer(state, action)
}

export default rootReducer
