import i18n from 'i18n-js'

import { createTranslateNamespace } from './createTranslateNamespace'

describe('translateNamespace', () => {
  it('should translate correctly given a namespace', () => {
    i18n.translations = {
      'pt-BR': {
        words: {
          add: 'Adicionar',
          apply: 'Aplicar',
          cancel: 'Cancelar',
        },
        colors: {
          red: 'Vermelho',
          blue: 'Azul',
          green: 'Verde',
        },
        numbers: {
          1: 'Um',
          2: 'Dois',
          3: 'Três',
        },
      },
    }
    i18n.locale = 'pt-BR'

    const translateNamespace = createTranslateNamespace(i18n)
    const tnWords = translateNamespace('words')
    const tnColors = translateNamespace('colors')
    const tnNumbers = translateNamespace('numbers')

    expect(tnWords('add')).toBe('Adicionar')
    expect(tnWords('apply')).toBe('Aplicar')
    expect(tnWords('cancel')).toBe('Cancelar')

    expect(tnColors('red')).toBe('Vermelho')
    expect(tnColors('blue')).toBe('Azul')
    expect(tnColors('green')).toBe('Verde')

    expect(tnNumbers('1')).toBe('Um')
    expect(tnNumbers('2')).toBe('Dois')
    expect(tnNumbers('3')).toBe('Três')
  })
})
