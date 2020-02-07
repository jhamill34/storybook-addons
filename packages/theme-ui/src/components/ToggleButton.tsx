import React from 'react'
import { styled } from '@storybook/theming'
type ToggleButtonProps = {
  showList: boolean
  toggleList(): void
}

const StyledRow = styled.div(() => ({
  display: 'flex',
  justifyContent: 'stretch',
}))

const StyledButton = styled.button(({ theme }) => {
  return {
    backgroundColor: theme.background.content,
    borderColor: theme.appBorderColor,
    borderStyle: 'solid',
    borderTopLeftRadius: theme.appBorderRadius,
    borderTopRightRadius: theme.appBorderRadius,
    borderWidth: '1px',
    borderBottomWidth: '3px',
    borderBottomColor: 'transparent',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
    color: theme.color.defaultText,
    cursor: 'pointer',
    fontSize: '0.75em',
    fontWeight: 'bold',
    padding: '0.5em',
    transition: 'all 0.15s ease-in-out',
    ':focus': {
      borderBottomColor: theme.color.primary,
    },
  }
})

export function ToggleButton(props: ToggleButtonProps): React.ReactElement {
  return (
    <StyledRow>
      <StyledButton onClick={props.toggleList}>
        {!props.showList ? 'Show Themes' : 'Hide Themes'}
      </StyledButton>
    </StyledRow>
  )
}
