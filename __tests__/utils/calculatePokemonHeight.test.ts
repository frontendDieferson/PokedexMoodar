import { calculatePokemonHeight } from '@utils/calculatePokemonHeight'

describe('calculatePokemonHeight', () => {
  it.each([
    [5, '0.5m'],
    [17, '1.7m'],
    [125.5, '12.55m'],
  ])('should convert %f to %s', (decimeters, expected) => {
    const result = calculatePokemonHeight(decimeters)
    expect(result).toBe(expected)
  })
})
