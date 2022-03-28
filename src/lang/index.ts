import i18n from 'i18n-js'

import { createTranslateNamespace } from './createTranslateNamespace'
import { getLocale } from './lang.service'
import { pt_BR } from './locales'

i18n.translations = {
  'pt-BR': pt_BR,
}

i18n.defaultLocale = 'pt-BR'
i18n.locale = getLocale()
i18n.fallbacks = true

const translateNamespace = createTranslateNamespace(i18n)
const words = translateNamespace('words')

export { i18n, translateNamespace, words }
