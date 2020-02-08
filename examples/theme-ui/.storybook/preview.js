import { addParameters, addDecorator } from '@storybook/react'
import { setupPreview } from '@spedue/storybook-preset/dist/preview'
import { create } from '@storybook/theming'
import { withThemeProvider } from 'storybook-addon-theme-ui'
import * as themes from '../src/themes'

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
  themeUi: {
    themes: [
      { theme: themes.silverTree, name: 'Silver Tree' },
      { theme: themes.fountainBlue, name: 'Fountain' },
      { theme: themes.pastelRed, name: 'Pastel Red' }
    ]
  },
  options: {
    theme: myTheme,
  },
})

addDecorator(withThemeProvider)
