# Storybook Color Theme UI 

Storybook Theme UI allows your stories to be displayed in various themes supplied by theme-ui. This addon was made 
to be primarliy used in conjunction with [Storybook Addon Docs](https://www.npmjs.com/package/@storybook/addon-docs) but can be used without as well.

## Installation

Install the following npm module:

```sh
npm i --save-dev storybook-addon-theme-ui theme-ui react
```

or with yarn:

```sh
yarn add -D storybook-addon-theme-ui theme-ui react
```

## Configuration

The color mode addon is configured by story parameters with the `themeUi` key. To configure globally, import `addParameters` from your app layer in your `config.js` file.

```js
import { addParameters } from '@storybook/react';
import * as themes from '../src/themes'

addParameters({
  themeUi: {
    themes: [
      { theme: themes.silverTree, name: 'Silver Tree' },
      { theme: themes.fountainBlue, name: 'Fountain' },
      { theme: themes.pastelRed, name: 'Pastel Red' }
    ]
  },
})
```

Options can take a object with the following keys:

### themes: ThemeMap[] 

An array of objects that include both a reference to your theme object and a name that will be displayed in 
the theme chooser panel. 

#### Theme Map 

```ts
import { Theme } from 'theme-ui'

type ThemeMap = {
  /**
   * A reference to a theme-ui object.
   */
  theme: Theme 

  /**
   * The display name used in the theme chooser panel.
   */
  name: string
}
```

## withThemeProvider 

Like any other storybook decorator just import `withThemeProvider` from this package and add it to your 
decorator list. 

```tsx
import React from 'react'
import { withThemeProvider } from 'storybook-addon-theme-ui'
import { Button } from '../Button'

export default {
  title: 'Button', 
  decorators: [withThemeProvider]
 }

export function withText(): JSX.Element {
  return <Button title="Click Me" />
}
```

Or done globally in your `preview.tsx`

```ts
import { addDecorator } from '@storybook/addons'
import { withThemeProvider } from 'storybook-addon-theme-ui'

addDecorator(withThemeProvider)
```

## Related Projects

This project was built on top of the wonderfully designed [Theme UI](https://theme-ui.com) project.
