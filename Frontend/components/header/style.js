import styled from 'styled-components';


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

@media (max-width: 1300px) {
    margin: 0;
    text-align: center;
}

`

export const HeaderContainer = styled.header`
    .bar {
    border-bottom: 5px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }`