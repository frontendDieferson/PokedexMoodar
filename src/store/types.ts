import { AuthState } from './modules/auth/types'
import { FilterState } from './modules/filter/types'

export interface ApplicationState {
  auth: AuthState
  filter: FilterState
}
