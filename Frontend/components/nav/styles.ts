import styled from 'styled-components';
import { devices } from '../../styles/device';

type Props = {
  open?:boolean
}


export const NavContainer = styled.div`
 
 width:100%;
 height:70px;
 position:sticky;
 top:0;
 z-index:30;
 background-color: #586dac ;

`

export const Navbar = styled.div`
margin:auto;
width:100%;
max-width:1200px;
height:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;

@media ${devices.desktop} {
  flex-wrap:initial;
}

@media ${devices.tablet} {

  flex-wrap:initial ;
  align-items: center;
}

`
export const Menu = styled.ul<Props>`
height:100% ;
display:flex;
justify-content:center;
align-items:center;
padding:0;
margin:0;

@media ${devices.desktop} {
  width:100% ;
}

@media ${devices.mobile} {
  width:100%;
  height:100vh;
  position:absolute;
  left: ${props => (props.open ? 0 : "-100%")};
  flex-direction:column ;
  transition:0.2s all;
  background-color: #586dac;
  top:50%
}

`

export const Item = styled.li`
height:100%;
display:flex;
justify-content:center;
align-items:center;
font-size:1.5rem;
padding: 0.5rem 1.5rem;

a{
    padding: 0.5rem 1rem;
    background: ${props => props.theme.blue};
    color: white;
    transform: skew(-10deg, -5deg);
  }

button {
    padding: 1.5rem 3rem;
    background: ${props => props.theme.blue};
    color: white;
    transform: skew(-10deg, -5deg);
    border:none
}  

&:hover{
  background-color: #4f75c5ad;
  transition:0.5s ease-in ;
  /* border-bottom:0.5rem solid #828dab42; */
}

@media ${devices.mobile} {
  width:100%;
  height:80px;
  font-size:2.5rem;
  font-weight:600;

  &:hover {
    background-color:#586dac

  }

  button {
    display:none ;
  }

  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.blue};
    color: white;
    transform: skew(-10deg, -5deg);

    &:hover {
     margin-bottom:6px;
     transition: 0.1s;
    
    }
  }

}

`

export const MenuMobile = styled.div`
display:none;

@media ${devices.mobile} {
  display:flex;
  justify-content: end;
  align-items: center;
  z-index:100 ;

}`

export const MenuCart = styled.div`
display:none;

@media ${devices.mobile} {
  display:flex;
  justify-content: end;
  align-items: center;
  z-index:100 ;

}

`

