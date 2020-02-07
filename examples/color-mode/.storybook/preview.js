import { addParameters, addDecorator } from '@storybook/react'
import { setupPreview } from '@spedue/storybook-preset/dist/preview'
import { create } from '@storybook/theming'
import { withThemeProvider } from 'storybook-addon-color-mode'
import { theme } from '../src/theme'

const myTheme = create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'hotpink',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  brandTitle: 'My custom storybook',
  brandImage: 'https://placehold.it/350x150',
})

setupPreview(addParameters)

addParameters({
  colorMode: {
    modes: {
      dark: {
        name: 'Dark'
      }
    },
  },
  options: {
    theme: myTheme,
  },
})

addDecorator(withThemeProvider(theme))
