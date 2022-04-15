import styled from 'styled-components';
import {devices} from '../../styles/device';


const NavStyles = styled.ul`



  margin: 0 0 0 5rem;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  align-items: flex-end;
  a,
  button {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &.sign {
      color:red
    } 
    &:before {
      content: '';
      width: 2px;
      background: var(--blue);
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 3rem;
      background: #2929ff;
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration:none;
      &:after {
        width: calc(100% - 60px);
      }
  
      @media (max-width: 700px) {
        width: calc(100% - 10px);

      }
    }
  }


  @media ${devices.mobileSmall} {
   display:none ;
    // display:grid;
    /* height:100vh;
    font-size: 2rem ;
    width:100%;
    grid-template-columns:auto;
    margin:0;
    align-items: center;
   

    a,button {
      font-size:2rem;
      width:100%;
      padding:0 ;
      
      &:hover {
        text-decoration:none;
        background-color:red;
      }
    } */

  }
/* 
  @media ${devices.laptop} {
    border-top: 1px solid var(--lightGray);
    width:100%;
    justify-content: center;
    font-size: 1.5rem;
    display:grid;
    grid-template-columns: 1fr auto auto;
    
    .products-nav {
      display:grid;
      grid-template-columns: 20% 20% 20%;
    }
  } */

  @media ${devices.tablet} {
    .products-nav{  
    display:grid;
    grid-template-columns: 30% 30% 30%;
    }
  }
 
`;
export default NavStyles;