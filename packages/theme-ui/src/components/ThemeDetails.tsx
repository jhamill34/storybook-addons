// eslint-disable-next-line tsdoc/syntax
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Source } from '@storybook/components'
import { styled } from '@storybook/theming'
import { ThemeMap } from '../models'
import { convertToString } from '../utils'

type ThemeDetailsProps = {
  show: boolean
  theme: ThemeMap
}

const StyledSource = styled(Source)<{ show: boolean }>(({ show }) => ({
  margin: 0,
  borderRadius: 0,
  border: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  boxShadow: 'none',
  button: {
    background: 'rgba(0, 0, 0, 0.85)',
  },
  display: show ? 'block' : 'none',
}))

export function ThemeDetails(props: ThemeDetailsProps): React.ReactElement {
  return (
    <StyledSource
      code={convertToString(props.theme, {
        headerTemplate:
          "// Use the following import with your ThemeProvider component\nimport { $THEME_EXPORT } from 'my/cool/lib'",
      })}
      dark
      format
      language="javascript"
      show={props.show}
    />
  )
}
