import styled from 'styled-components';

export const CartStyle = styled.div`
  padding: 20px;
  position: relative;
  background: #ffff;
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 400px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.2s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${({isOpen}) => isOpen && `transform: translateX(0);`};
  
`;

