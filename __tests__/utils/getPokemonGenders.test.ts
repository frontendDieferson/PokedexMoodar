import { getPokemonGenders } from '@utils/getPokemonGenders'

describe('getPokemonGenders', () => {
  it.each([
    [-1, ['genderless']],
    [0, ['male']],
    [1, ['female', 'male']],
    [2, ['female', 'male']],
    [3, ['female', 'male']],
    [4, ['female', 'male']],
    [5, ['female', 'male']],
    [6, ['female', 'male']],
    [7, ['female', 'male']],
    [8, ['female']],
  ])('should match %i to return %s', (value, expected) => {
    const genders = getPokemonGenders(value)
    expect(genders).toEqual(expected)
  })
})
