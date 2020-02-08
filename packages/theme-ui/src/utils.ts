import { ThemeMap } from './models'

type ConvertOptions = {
  headerTemplate?: string
}

enum StackKind {
  ENTRY,
  BOUNDARY,
}

interface StackEntry {
  kind: StackKind.ENTRY
  value: [string, unknown]
  level: number
}

interface StackBoundary {
  kind: StackKind.BOUNDARY
  level: number
}

function paddedString(value: string, level: number): string {
  const padding = Array(level)
    .fill('  ')
    .join('')

  return `${padding}${value}`
}

export function convertToString(
  theme: ThemeMap,
  options?: ConvertOptions
): string {
  const result: string[] = []

  const name = theme.name
    .split(/\s+/)
    .map((word, index) => {
      return index !== 0
        ? word.slice(0, 1).toUpperCase() + word.slice(1)
        : word.toLowerCase()
    })
    .join('')

  if (options?.headerTemplate) {
    result.push(options.headerTemplate.replace('$THEME_EXPORT', name))
  } else {
    result.push(
      '// Copy and Pass this object theme to your ThemeProvider Component'
    )
  }
  result.push('')

  result.push(`export const ${name} = {`)

  // DFS here
  const stack: Array<StackEntry | StackBoundary> = Object.entries(theme.theme)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(
      (e: [string, unknown]): StackEntry => ({
        kind: StackKind.ENTRY,
        value: e,
        level: 1,
      })
    )

  while (stack.length > 0) {
    const item = stack.pop()
    if (item === undefined) continue

    if (item.kind === StackKind.ENTRY) {
      const [key, value] = item.value

      if (typeof value !== 'function') {
        if (value instanceof Array) {
          const normalizedValues = value.map(v => {
            if (typeof v === 'string') {
              return `'${v}'`
            } else {
              return v
            }
          })

          result.push(
            paddedString(
              `${key}: [${normalizedValues.join(', ')}],`,
              item.level
            )
          )
        } else if (typeof value === 'object' && value !== null) {
          const entries = Object.entries(value).sort((a, b) =>
            b[0].localeCompare(a[0])
          )

          result.push(paddedString(`${key}: {`, item.level))
          stack.push({
            kind: StackKind.BOUNDARY,
            level: item.level,
          })

          for (const value of entries) {
            stack.push({
              kind: StackKind.ENTRY,
              value,
              level: item.level + 1,
            })
          }
        } else if (typeof value === 'string') {
          result.push(paddedString(`${key}: '${value}',`, item.level))
        } else {
          result.push(paddedString(`${key}: ${value},`, item.level))
        }
      }
    } else if (item.kind === StackKind.BOUNDARY) {
      result.push(paddedString(`},`, item.level))
    }
  }

  result.push('}')
  result.push(`\n`)

  return result.join('\n')
}
