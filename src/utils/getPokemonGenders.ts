const [genderless, female, male] = ['genderless', 'female', 'male']

/**
 * @param genderRate The chance of this Pokémon being female, in eighths; or -1 for genderless
 */
export const getPokemonGenders = (genderRate: number) => {
  if (genderRate === 0) {
    return [male]
  }
  if (genderRate === 8) {
    return [female]
  }
  if (genderRate === -1) {
    return [genderless]
  }
  return [female, male]
}
