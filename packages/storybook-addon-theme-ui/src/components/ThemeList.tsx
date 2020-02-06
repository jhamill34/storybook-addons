import React from 'react'
import { styled } from '@storybook/theming'
import { ThemeMap } from '../models'

type ThemeListProps = {
  show: boolean
  selected?: ThemeMap
  themes: ThemeMap[]
  selectTheme(theme: ThemeMap): void
}

const StyledList = styled.ul<{ showList: boolean }>(({ showList, theme }) => ({
  margin: 0,
  padding: '0.5em',
  listStyleType: 'none',
  display: showList ? 'flex' : 'none',
  flexFlow: 'row wrap',
  backgroundColor: theme.color.darkest,
  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.2) inset',
}))

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
  return (
    <StyledList showList={props.show}>
      {props.themes.map(t => (
        <StyledListItem
          key={t.name}
          onClick={(): void => props.selectTheme(t)}
          selected={props.selected?.name === t.name}
        >
          {t.name}
        </StyledListItem>
      ))}
    </StyledList>
  )
}
