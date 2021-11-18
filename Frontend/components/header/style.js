import styled from 'styled-components';


export const Logo = styled.h1`
font-size: 4rem;
position: relative;
z-index: 2;
transform: skew(-7deg);
text-align: center;
margin: 0px;
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
        border-bottom: 10px solid ${props => props.theme.black};
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        position: fixed;
        width: 100%;
    }`