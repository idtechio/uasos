import type { InputProps } from './types'
import { InputWraper, Label, TextInput } from './style'
import React, { useState } from 'react'

const Input = ({placeholder, backgroundColor}: InputProps) => {
  const [placeholderIsLabel, setPlaceholderIsLabel] = useState(0)
  
  const onFocus = (e) => {
    e.target.placeholder = ''
    setPlaceholderIsLabel(1)
  }

  const onBlur = (e) => {
    e.target.placeholder = placeholder
    setPlaceholderIsLabel(0)
  }

  return(
    <InputWraper>
      {placeholderIsLabel ? <Label>{placeholder}</Label> : null}
      <TextInput
        onFocus={(e) => onFocus(e)}
        onBlur={(e) => onBlur(e)}
        // value={number}
        placeholder={placeholder}
      />
    </InputWraper>
  )
}

export default Input