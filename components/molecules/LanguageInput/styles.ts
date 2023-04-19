import styled from 'vue-styled-components'

export const StyledSelect = styled.select`
  display: inline-block;
  padding: 6px;
  width: 120px;
  border: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #f5f6fa;
  font-size: 14px;
  
  &:focus {
    outline: 1px solid #0984e3;
  }
`
export const StyledOption = styled.option`
  display: block;
  padding: 20px;
  
`
