import React from 'react'
import { StyledLabel, StyledCheckbox, StyledInput } from './styled';

export default function Checkbox({ label, onChange, checked, name }) {
  return (
    <StyledCheckbox>
      <StyledInput
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange} 
      />
      <StyledLabel>
        {label}
      </StyledLabel>
    </StyledCheckbox>
  )
}
