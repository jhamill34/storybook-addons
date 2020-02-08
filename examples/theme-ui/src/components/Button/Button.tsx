// eslint-disable-next-line tsdoc/syntax
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

type ButtonProps = {
  title: string
}

export function Button(props: ButtonProps): React.ReactElement {
  return (
    <button
      sx={{
        color: 'text',
        backgroundColor: 'primary',
        fontWeight: 'bold',
        fontSize: '1em',
        padding: '0.75em',
        border: 0,
        borderRadius: '1em',
        boxShadow: '0 2px 3px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      }}
    >
      {props.title}
    </button>
  )
}
