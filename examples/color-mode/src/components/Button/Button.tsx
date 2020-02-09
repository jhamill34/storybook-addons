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
        border: 0,
        borderRadius: '1em',
        padding: '0.75em',
        color: 'background',
        backgroundColor: 'primary',
        fontSize: '1em',
      }}
    >
      {props.title}
    </button>
  )
}
