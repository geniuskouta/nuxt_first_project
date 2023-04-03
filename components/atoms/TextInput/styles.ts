import styled from 'vue-styled-components'

export const StyledInput = styled.input`
  display: block;
  margin-top: 8px;
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #f5f6fa;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  &:focus {
    outline: 1px solid #0984e3;
  }
`

export const StyledLabel = styled.label`
  color: #353b48;
  font-size: 16px;
  font-weight: bold;
  display: block;
`
export const Required = styled.label.attrs({
  'aria-label': 'required'
})`
  margin-left: 2px;
  color: #e84118;
  display: inline-block;
`
