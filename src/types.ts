import type colors from './color-name'

export type RGB = [number, number, number]
export type HSL = [number, number, number]
export type HSV = [number, number, number]
export type HWB = [number, number, number]
export type CMYK = [number, number, number, number]
export type XYZ = [number, number, number]
export type LAB = [number, number, number]
export type LCH = [number, number, number]
export type HEX = string
export type KEYWORD = keyof typeof colors
export type ANSI16 = number
export type ANSI256 = number
export type HCG = [number, number, number]
export type APPLE = [number, number, number]
export type GRAY = [number]

export interface COLORS {
  aliceblue: RGB
  antiquewhite: RGB
  aqua: RGB
  aquamarine: RGB
  azure: RGB
  beige: RGB
  bisque: RGB
  black: RGB
  blanchedalmond: RGB
  blue: RGB
  blueviolet: RGB
  brown: RGB
  burlywood: RGB
  cadetblue: RGB
  chartreuse: RGB
  chocolate: RGB
  coral: RGB
  cornflowerblue: RGB
  cornsilk: RGB
  crimson: RGB
  cyan: RGB
  darkblue: RGB
  darkcyan: RGB
  darkgoldenrod: RGB
  darkgray: RGB
  darkgreen: RGB
  darkgrey: RGB
  darkkhaki: RGB
  darkmagenta: RGB
  darkolivegreen: RGB
  darkorange: RGB
  darkorchid: RGB
  darkred: RGB
  darksalmon: RGB
  darkseagreen: RGB
  darkslateblue: RGB
  darkslategray: RGB
  darkslategrey: RGB
  darkturquoise: RGB
  darkviolet: RGB
  deeppink: RGB
  deepskyblue: RGB
  dimgray: RGB
  dimgrey: RGB
  dodgerblue: RGB
  firebrick: RGB
  floralwhite: RGB
  forestgreen: RGB
  fuchsia: RGB
  gainsboro: RGB
  ghostwhite: RGB
  gold: RGB
  goldenrod: RGB
  gray: RGB
  green: RGB
  greenyellow: RGB
  grey: RGB
  honeydew: RGB
  hotpink: RGB
  indianred: RGB
  indigo: RGB
  ivory: RGB
  khaki: RGB
  lavender: RGB
  lavenderblush: RGB
  lawngreen: RGB
  lemonchiffon: RGB
  lightblue: RGB
  lightcoral: RGB
  lightcyan: RGB
  lightgoldenrodyellow: RGB
  lightgray: RGB
  lightgreen: RGB
  lightgrey: RGB
  lightpink: RGB
  lightsalmon: RGB
  lightseagreen: RGB
  lightskyblue: RGB
  lightslategray: RGB
  lightslategrey: RGB
  lightsteelblue: RGB
  lightyellow: RGB
  lime: RGB
  limegreen: RGB
  linen: RGB
  magenta: RGB
  maroon: RGB
  mediumaquamarine: RGB
  mediumblue: RGB
  mediumorchid: RGB
  mediumpurple: RGB
  mediumseagreen: RGB
  mediumslateblue: RGB
  mediumspringgreen: RGB
  mediumturquoise: RGB
  mediumvioletred: RGB
  midnightblue: RGB
  mintcream: RGB
  mistyrose: RGB
  moccasin: RGB
  navajowhite: RGB
  navy: RGB
  oldlace: RGB
  olive: RGB
  olivedrab: RGB
  orange: RGB
  orangered: RGB
  orchid: RGB
  palegoldenrod: RGB
  palegreen: RGB
  paleturquoise: RGB
  palevioletred: RGB
  papayawhip: RGB
  peachpuff: RGB
  peru: RGB
  pink: RGB
  plum: RGB
  powderblue: RGB
  purple: RGB
  rebeccapurple: RGB
  red: RGB
  rosybrown: RGB
  royalblue: RGB
  saddlebrown: RGB
  salmon: RGB
  sandybrown: RGB
  seagreen: RGB
  seashell: RGB
  sienna: RGB
  silver: RGB
  skyblue: RGB
  slateblue: RGB
  slategray: RGB
  slategrey: RGB
  snow: RGB
  springgreen: RGB
  steelblue: RGB
  tan: RGB
  teal: RGB
  thistle: RGB
  tomato: RGB
  turquoise: RGB
  violet: RGB
  wheat: RGB
  white: RGB
  whitesmoke: RGB
  yellow: RGB
  yellowgreen: RGB
}
