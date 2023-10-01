import process from 'node:process'
import { describe, expect, it } from 'vitest'
import cssKeywords from '../src/color-name'
import convert from '../src/index'

describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })
})

describe('color name', () => {
  it('color name test', () => {
    expect(cssKeywords.red).toEqual([255, 0, 0])
    expect(cssKeywords.aliceblue).toEqual([240, 248, 255])
  })

  it('for keys cssKeywords', () => {
    for (const key of Object.keys(cssKeywords))

      // @ts-expect-error console
      console.log(cssKeywords[key])
  })
})

describe('ansi color grid', () => {
  it('main', () => {
    process.stdout.write('\n')

    for (let i = 0; i < 256; i++) {
      if (i > 0 && (i % 8) === 0)
        process.stdout.write('\n')

      const code16 = convert.ansi256.ansi16(i)

      process.stdout.write(
        `  [${
          '  '.substr(Math.max(0, Math.floor(Math.log10(i))))
        }${
          i
        } \u001B[48;5;${i}m   \u001B[0;${
          code16 + 10
        }m   \u001B[m ${
          code16
        }${
          '  '.substr(Math.max(0, Math.floor(Math.log10(code16))))
        }]`,
      )
    }

    process.stdout.write('\n\n')
  })
})

describe('basic', () => {
  it('basic', () => {
    expect(convert.rgb.hsl([140, 200, 100])).toEqual([96, 48, 59])
    expect(convert.rgb.hsv([140, 200, 100])).toEqual([96, 50, 78])
    expect(convert.rgb.hwb([140, 200, 100])).toEqual([96, 39, 22])
    expect(convert.rgb.cmyk([140, 200, 100])).toEqual([30, 0, 50, 22])
  })
})
