import styled from 'styled-components';

export const SearchStyle = styled.div`
input {
  padding:1rem;
  width:100%;
  font-size: 1.5rem;
}
`

export const ProductsContainer = styled.section`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid var( --color-border);
  background-color: white;
  div:hover {
   background-color: #f7f7f7;
   padding-left:2rem;
   cursor: pointer;
  }
`;

export const ProductStyle = styled.div`
  border-bottom: 1px solid var( --color-border);
  padding: 0.1rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  p {
    margin-left: 1rem;
  }
 
  
`;