import { action } from 'typesafe-actions'

import { FilterTypes } from './types'

export const selectType = (type?: string) =>
  action(FilterTypes.SELECT_TYPE, { type })

export type Action = ReturnType<typeof selectType>
