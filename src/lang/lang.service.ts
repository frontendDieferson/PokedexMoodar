import { getLocales } from 'react-native-localize'

export function getLocale(): string {
  return getLocales()[0].languageTag
}
