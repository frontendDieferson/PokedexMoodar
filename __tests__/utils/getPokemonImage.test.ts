import { getPokemonImage } from '@utils/getPokemonImage'

describe('getPokemonImage', () => {
  it.each([
    [
      3,
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    ],
    [
      75,
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png',
    ],
    [
      241,
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png',
    ],
  ])('should correctly add %d to URL', (number, expected) => {
    const url = getPokemonImage(number)
    expect(url).toBe(expected)
  })
})
