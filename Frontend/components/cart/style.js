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


  
  h1 {
    margin:0;
    border-bottom: 5px solid;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    
  }

  footer {
    border-top: 5px solid;
    margin-top: 2rem;
    padding-top: 2rem;
  }
  
`;

export const ItemStyle = styled.li`
display:flex;
margin-top:5px;
p {
  margin:0
}
h3 {
  margin:0
}
`

