// eslint-disable-next-line tsdoc/syntax
/** @jsx jsx */
import React from 'react'
import { jsx, ThemeProvider, Styled } from 'theme-ui'
import { ThemeMap } from '../models'
import { ThemeList } from './ThemeList'
import { ToggleButton } from './ToggleButton'

type ThemeWrapperProps = {
  themes: ThemeMap[]
  children: React.ReactNode
}

export function ThemeWrapper(props: ThemeWrapperProps): React.ReactElement {
  // TODO: use the storybook state
  const [theme, setTheme] = React.useState(props.themes[0])
  const [showList, setShowList] = React.useState(false)

  function toggleShowList(): void {
    setShowList(_showList => !_showList)
  }

  return (
    <div>
      <ToggleButton showList={showList} toggleList={toggleShowList} />
      <ThemeList
        selected={theme}
        selectTheme={(theme: ThemeMap): void => setTheme(theme)}
        show={showList}
        themes={props.themes}
      />
      <ThemeProvider
        theme={Object.assign({}, theme.theme, { useBodyStyles: false })}
      >
        <div
          sx={{
            backgroundColor: 'background',
            color: 'text',
            padding: '1em',
            borderRadius: '2px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
            zIndex: 1,
            position: 'relative',
          }}
        >
          <Styled.root>{props.children}</Styled.root>
        </div>
      </ThemeProvider>
    </div>
  )
}
