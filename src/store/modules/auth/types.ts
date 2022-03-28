/**
 * Action types
 */
export enum AuthTypes {
  SIGN_IN = '@auth/SIGN_IN',
  SIGN_OUT = '@auth/SIGN_OUT',
}

/**
 * Data types
 */
export interface User {
  name: string
  email: string
}

/**
 * State type
 */
export interface AuthState {
  readonly user?: User
  readonly signed: boolean
}
