import fs from 'fs'
import path from 'path'
import { ThemeMap } from '../models'
import { convertToString } from '../utils'

function getResult(filename: string): string {
  return fs.readFileSync(path.join(__dirname, 'examples', filename)).toString()
}

describe('object coverter', () => {
  it('should match the resulting export for object', () => {
    const obj: ThemeMap = {
      theme: {
        colors: {
          text: 'black',
          background: 'red',
        },
      },
      name: 'Default Theme',
    }

    const result = convertToString(obj)

    expect(result).toEqual(getResult('defaultTheme.txt'))
  })

  it('should match the resulting export for a custom header', () => {
    const obj: ThemeMap = {
      theme: {
        colors: {
          text: 'black',
          background: 'red',
        },
      },
      name: 'Custom Theme',
    }

    const result = convertToString(obj, {
      headerTemplate:
        "// Use the following import\nimport { $THEME_EXPORT } from 'my/theme/lib'",
    })

    expect(result).toEqual(getResult('customTheme.txt'))
  })

  it('should parse multiple nested objects', () => {
    const obj: ThemeMap = {
      theme: {
        colors: {
          text: 'black',
          background: 'red',
        },
        styles: {
          root: {
            color: 'text',
            p: 1,
          },
        },
      },
      name: 'Third Theme',
    }

    const result = convertToString(obj)

    expect(result).toEqual(getResult('thirdTheme.txt'))
  })

  it('should parse arrays objects', () => {
    const obj: ThemeMap = {
      theme: {
        breakpoints: ['1em', '2em'],
        fontSizes: [1, 2, 4, 8, 16],
        colors: {
          text: 'black',
          background: 'red',
        },
        styles: {
          root: {
            color: 'text',
            p: 1,
          },
        },
      },
      name: 'Array Theme',
    }

    const result = convertToString(obj)

    expect(result).toEqual(getResult('themeWithArray.txt'))
  })
})
