import React, { useState } from 'react'
import { styled } from '@storybook/theming'
import { ThemeMap } from '../models'
import { ThemeDetails } from './ThemeDetails'

type ThemeListProps = {
  show: boolean
  selected: ThemeMap
  themes: ThemeMap[]
  selectTheme(theme: ThemeMap): void
}

const StyledRow = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
})

const StyledToggleButton = styled.button(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  borderColor: theme.appBorderColor,
  borderStyle: 'solid',
  borderTopLeftRadius: theme.appBorderRadius,
  borderWidth: '1px',
  borderBottomWidth: '3px',
  borderBottomColor: 'transparent',
  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
  color: theme.color.inverseText,
  cursor: 'pointer',
  fontSize: '0.75em',
  fontWeight: 'bold',
  padding: '0.5em',
  transition: 'all 0.15s ease-in-out',
  ':focus': {
    borderBottomColor: theme.color.primary,
  },
}))

const StyledContainer = styled.div<{ showList: boolean }>(({ showList }) => ({
  display: showList ? 'flex' : 'none',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.2) inset',
}))

const StyledList = styled.ul({
  margin: 0,
  padding: '0.5em',
  display: 'flex',
  listStyleType: 'none',
  flexFlow: 'row wrap',
  position: 'relative',
})

const StyledListItem = styled.li<{ selected: boolean }>(
  ({ selected, theme }) => ({
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    padding: '0.65em',
    margin: '0.25em 0.5em',
    fontFamily: theme.typography.fonts.base,
    fontSize: '0.75em',
    borderRadius: '1em',
    border: '1px solid transparent',
    borderColor: theme.appBorderColor,
    backgroundColor: selected ? theme.color.primary : theme.background.content,
    color: selected ? theme.color.inverseText : theme.color.defaultText,
    transition: 'all 0.15s ease-in-out',
    cursor: 'pointer',
    ':hover, :focus': {
      borderColor: theme.color.primary,
      color: !selected ? theme.color.primary : theme.color.inverseText,
    },
  })
)

export function ThemeList(props: ThemeListProps): React.ReactElement {
  const [showCode, setShowCode] = useState(false)

  function toggleThemeCode(): void {
    setShowCode(show => !show)
  }

  return (
    <StyledContainer showList={props.show}>
      <StyledRow>
        <StyledToggleButton onClick={toggleThemeCode}>
          {showCode ? 'Show Theme' : 'Hide Theme'}
        </StyledToggleButton>
      </StyledRow>
      <StyledList>
        {props.themes.map(t => (
          <StyledListItem
            key={t.name}
            onClick={(): void => props.selectTheme(t)}
            selected={props.selected.name === t.name}
          >
            {t.name}
          </StyledListItem>
        ))}
      </StyledList>
      <ThemeDetails show={showCode} theme={props.selected} />
    </StyledContainer>
  )
}
