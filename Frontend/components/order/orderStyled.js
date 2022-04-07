import styled from 'styled-components';

export const OrderStyled = styled.div`
width:100%;
padding:2rem;
display:flex;
gap:3rem;
align-items: baseline;


`
export const OrderSummary = styled.div`
width: 50%;
/* border: 1px solid var(--black-border); */
box-shadow:var(--shadow);


.totalCart {
  border-top:1px solid ;
}

` 
export const PaymentDetails = styled.form`
width: 50%;
/* border: 1px solid var(--black-border); */
box-shadow:var(--shadow);
background-color: var(--checkout-background);

.total {
  border-top:1px solid ;
}

label {
  display: block;
}
`