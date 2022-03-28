import { Reducer } from 'redux'

import { Action } from './actions'
import { AuthState, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
  user: undefined,
  signed: false,
}

const reducer: Reducer<AuthState, Action> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        signed: true,
      }
    case AuthTypes.SIGN_OUT:
      return INITIAL_STATE
    default:
      return state
  }
}

export default reducer
