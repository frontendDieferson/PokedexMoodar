const RANGE_STATS = [1, 255] as const

export const calculateStatPercentage = (value: number) => {
  return (value / RANGE_STATS[1]) * 100
}
