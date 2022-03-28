import i18nJS, { TranslateOptions } from 'i18n-js'

export const createTranslateNamespace =
  (i18n: typeof i18nJS) =>
  (namespace: string) =>
  (scope: string, options?: TranslateOptions) =>
    i18n.t(`${namespace}.${scope}`, options)
