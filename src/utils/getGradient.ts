import { darken, lighten } from 'polished'

export const getGradient = (baseColor: string): [string, string, string] => {
  return [lighten(0.2, baseColor), baseColor, darken(0.2, baseColor)]
}
