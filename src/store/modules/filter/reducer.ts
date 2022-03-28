import { Reducer } from 'redux'

import { Action } from './actions'
import { FilterState, FilterTypes } from './types'

const INITIAL_STATE: FilterState = {
  type: undefined,
}

const reducer: Reducer<FilterState, Action> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case FilterTypes.SELECT_TYPE:
      return {
        type: action.payload.type,
      }
    default:
      return state
  }
}

export default reducer
