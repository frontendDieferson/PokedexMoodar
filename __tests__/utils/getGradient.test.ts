import { getGradient } from '@utils/getGradient'

describe('getGradient', () => {
  it.each([
    ['#a8a77a', ['#d0d0b8', '#a8a77a', '#72714a']],
    ['#ee8130', ['#f6ba8e', '#ee8130', '#aa500e']],
    ['#6390f0', ['#c0d2f9', '#6390f0', '#1553d8']],
    ['#f7d02c', ['#fbe68e', '#f7d02c', '#b69407']],
    ['#7ac74c', ['#b4df9a', '#7ac74c', '#4b8429']],
    ['#96d9d6', ['#e1f4f3', '#96d9d6', '#4bbeb9']],
    ['#c22e28', ['#e1736f', '#c22e28', '#6d1a17']],
    ['#a33ea1', ['#cd7acb', '#a33ea1', '#592258']],
    ['#e2bf65', ['#f2e3bb', '#e2bf65', '#bd9224']],
    ['#a98ff3', ['#f0ebfd', '#a98ff3', '#6233e9']],
    ['#f95587', ['#fcb8cd', '#f95587', '#e0084a']],
    ['#a6b91a', ['#d5e752', '#a6b91a', '#56600d']],
    ['#b6a136', ['#d8c87a', '#b6a136', '#675b1f']],
    ['#735797', ['#a793c1', '#735797', '#423256']],
    ['#6f35fc', ['#b79afd', '#6f35fc', '#3c03c8']],
    ['#705746', ['#a88974', '#705746', '#31261f']],
    ['#b7b7ce', ['#f4f4f7', '#b7b7ce', '#7a7aa5']],
    ['#d685ad', ['#f0d1e0', '#d685ad', '#b73e7a']],
  ])(
    'should generate the color pallete given %s and return %o',
    (color, expected) => {
      const result = getGradient(color)
      expect(result).toEqual(expected)
    },
  )
})
