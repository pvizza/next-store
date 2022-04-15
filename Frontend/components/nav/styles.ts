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
`
export const Menu = styled.ul<Props>`
height:100% ;
display:flex;
justify-content:center;
align-items:center;
padding:0;
margin:0;

@media ${devices.mobileSmall} {
  width:100%;
  height:100vh;
  position:absolute;
  /* top:70px; */
  left: ${props => (props.open ? 0 : "-100%")};
  flex-direction:column ;
  transition:0.8s all ease-in-out;
  background-color: #586dac
}

`

export const Item = styled.li`
height:100%;
display:flex;
justify-content:center;
align-items:center;
font-size:1.5rem;
padding: 0.5rem 1.5rem;

&:hover{
  background-color: #4f75c5ad;
  transition:0.5s ease-in ;
  /* border-bottom:0.5rem solid #828dab42; */
}

@media ${devices.mobileSmall} {
  width:100%;
  height:80px;
  font-size:2.5rem;
  font-weight:600;
}

`

export const MenuMobile = styled.div`
display:none;

@media ${devices.mobileSmall} {
  display:flex;
  justify-content: end;
  z-index:100 ;

}

`
