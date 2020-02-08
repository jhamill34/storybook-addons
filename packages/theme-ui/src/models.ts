import { Theme } from 'theme-ui'

export type ThemeMap = {
  name: string
  theme: Theme
}

export type ThemeSettings = {
  themes: ThemeMap[]
}
