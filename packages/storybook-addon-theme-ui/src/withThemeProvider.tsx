// eslint-disable-next-line tsdoc/syntax
import React from 'react'
import {
  makeDecorator,
  StoryGetter,
  StoryContext,
  WrapperSettings,
} from '@storybook/addons'
import { ensure, ThemeProvider, ThemeVars } from '@storybook/theming'
import { ThemeMap } from './models'
import { firstTheme, secondTheme } from './theme'
import { ThemeWrapper } from './components/ThemeWrapper'

const THEMES: ThemeMap[] = [
  { theme: firstTheme, name: 'First Theme' },
  { theme: secondTheme, name: 'Second Theme' },
]

// TODO: Consume the params here to load themes
export function wrapper(
  story: StoryGetter,
  context: StoryContext,
  settings: WrapperSettings
): JSX.Element {
  console.log('SETTINGS')
  console.log(settings)
  console.log('CONTEXT')
  console.log(context)
  const { parameters = {} } = context
  const options = parameters.options || {}
  const theme = ensure(options.theme as ThemeVars)

  return (
    <ThemeProvider theme={theme}>
      <ThemeWrapper themes={THEMES}>{story(context)}</ThemeWrapper>
    </ThemeProvider>
  )
}

export const withThemeProvider = makeDecorator({
  name: 'withThemeProvider',
  parameterName: 'themeUi',
  skipIfNoParametersOrOptions: false,
  wrapper,
})
