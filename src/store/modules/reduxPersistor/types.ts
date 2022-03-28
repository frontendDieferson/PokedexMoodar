/**
 * Action types
 */
export enum ReduxPersistorTypes {
  REHYDRATE = 'persist/REHYDRATE',
}

/**
 * Data types
 */
export interface ReduxPersistor {
  auth: {
    token: string
  }
  client?: {
    client?: {
      token: string
    }
  }
}

export interface ReduxPersistorAction {
  type: ReduxPersistorTypes.REHYDRATE
  payload?: ReduxPersistor
}
