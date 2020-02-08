// eslint-disable-next-line tsdoc/syntax
import React from 'react'
import {
  makeDecorator,
  StoryGetter,
  StoryContext,
  WrapperSettings,
} from '@storybook/addons'
import { ensure, ThemeProvider, ThemeVars } from '@storybook/theming'
import { ThemeSettings } from './models'
import { ThemeWrapper } from './components/ThemeWrapper'

// TODO: Consume the params here to load themes
export function wrapper(
  story: StoryGetter,
  context: StoryContext,
  settings: WrapperSettings
): JSX.Element {
  const storyThemes = settings.parameters as ThemeSettings
  const { parameters = {} } = context
  const options = parameters.options || {}
  const theme = ensure(options.theme as ThemeVars)

  return (
    <ThemeProvider theme={theme}>
      <ThemeWrapper themes={storyThemes.themes}>{story(context)}</ThemeWrapper>
    </ThemeProvider>
  )
}

export const withThemeProvider = makeDecorator({
  name: 'withThemeProvider',
  parameterName: 'themeUi',
  skipIfNoParametersOrOptions: false,
  wrapper,
})
