import styled from 'styled-components';
import { devices } from '../../styles/device';

type Props = {
  open?:boolean
}

export const Logo = styled.h1`
font-size: 4rem;
position: relative;
z-index: 2;
transform: skew(-7deg);
text-align: center;
margin: 0px;
padding-left: 2rem;
a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.blue};
    color: white;
    
}

@media ${devices.desktop} {
    margin: 0;
    text-align: center;
    font-size:3.5rem;
    padding-left:0 ;
}

@media ${devices.tablet} {
  padding-left:2rem;

  a{
    padding:initial;
  }
}

@media ${devices.mobile} {
  font-size: 3rem;
  padding:0;
  

  a {
    background-color: #586dac;

  };
  
}

`;

export const HeaderContainer = styled.header<Props>`

     height: ${props => (props.open ? '100vh' : '0vh')}; 
     transition:${props => (props.open ? 'height 0.5s ease-in-out' : 'height 0.5s ease-in-out')};
     background-color: #586dac; 

    .bar {
    border-bottom: 5px solid var(--black, black);
    display: grid;
    grid-template-columns: auto auto 1fr;
    justify-content: flex-start;
    align-items: stretch;
  }
   
    .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }  

  @media ${devices.mobileSmall} {
   .bar {
     display:none;
   };
    
  }
 
 `;

export const HeaderMobile = styled.div`
    
    display:none;

    @media ${devices.mobileSmall} {
      display:grid;
      justify-content:center ;
    }
  
  `;
