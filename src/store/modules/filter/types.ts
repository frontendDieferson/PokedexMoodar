/**
 * Action types
 */
export enum FilterTypes {
  SELECT_TYPE = '@filter/SELECT_TYPE',
}

/**
 * State type
 */
export interface FilterState {
  readonly type: string | undefined
}
