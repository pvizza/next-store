import styled from 'styled-components'
import { devices } from '../../styles/device'

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;

 @media ${devices.tablet} {
   display: none;
 }
`