import styled from 'styled-components';
import { devices } from '../../styles/device';

export const ProductsStyles = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 60px;
justify-content: space-around;
margin-top: 20px;

@media ${devices.mobile} {
  grid-gap:10px;
  grid-template-columns: 1fr 1fr;
  padding: 1.4rem
  
}

`;