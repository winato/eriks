import styled from 'styled-components';

const StyledCheckbox = styled.label`
  display: flex;
  align-items: flex-start;
  margin-bottom: .5rem;
  cursor: pointer;
`
const StyledLabel = styled.div`
  font-size: .8rem;
  font-weight: bold;
  padding-left: .5rem;
`
const StyledInput = styled.input`
  margin-left: 0;
  cursor: pointer;
`

export {
  StyledCheckbox,
  StyledLabel,
  StyledInput,
}
