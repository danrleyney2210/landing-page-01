import styled from 'styled-components'
import { darken } from 'polished'

export const ContentButton = styled.button`
  background: #0FF;
  background-color: #0FF;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 15%);
  font-size: 18px;
  font-weight: 800;
  line-height: 28px;
  padding: 1rem;
  border: none;
  transition: all 0.2s;

  :hover {
    background-color: ${darken(.06, "#0FF")};
  }
`