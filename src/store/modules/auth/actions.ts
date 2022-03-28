import { action } from 'typesafe-actions'

import { AuthTypes, User } from './types'

export const signIn = (user: User) => action(AuthTypes.SIGN_IN, { user })

export const signOut = () => action(AuthTypes.SIGN_OUT)

export type Action = ReturnType<typeof signIn> | ReturnType<typeof signOut>
