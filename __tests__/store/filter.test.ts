import { Action, selectType } from '../../src/store/modules/filter/actions'
import reducer from '../../src/store/modules/filter/reducer'

describe('filter reducer', () => {
  it('should return the initial state giving undefined and calling no action', () => {
    expect(reducer(undefined, {} as Action)).toEqual({
      type: undefined,
    })
  })

  it('should return the type fairy giving it as argument to selectType', () => {
    expect(reducer(undefined, selectType('fairy'))).toEqual({
      type: 'fairy',
    })
  })

  it('should remove the type giving no argument to selectType', () => {
    const previousState = { type: 'dragon' }
    expect(reducer(previousState, {} as Action)).toEqual({
      type: 'dragon',
    })
    expect(reducer(previousState, selectType())).toEqual({
      type: undefined,
    })
  })
})
