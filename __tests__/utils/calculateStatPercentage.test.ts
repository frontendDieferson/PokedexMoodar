import { calculateStatPercentage } from '@utils/calculateStatPercentage'

describe('calculateStatPercentage', () => {
  it.each([
    [49, 19.215686274509807],
    [62, 24.313725490196077],
    [109, 42.745098039215684],
    [78, 30.58823529411765],
    [120, 47.05882352941176],
    [5, 1.9607843137254901],
    [1, 0.39215686274509803],
    [255, 100],
  ])('should calculate the base stat %d to return %f', (stat, expected) => {
    const result = calculateStatPercentage(stat)
    expect(result).toBe(expected)
  })
})
