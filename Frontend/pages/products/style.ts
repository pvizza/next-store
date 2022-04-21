import styled from 'styled-components';
import { devices } from '../../styles/device';

export const ProductsStyles = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 60px;
justify-content: space-around;
margin-top: 50px;

@media ${devices.mobileSmall} {
  grid-gap:initial;
  grid-template-columns: none;
}

`;