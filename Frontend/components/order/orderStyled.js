import styled from 'styled-components';
import { devices } from '../../styles/device';

export const OrderStyled = styled.div`
width:100%;
padding:2rem;
display:flex;
gap:3rem;
align-items: baseline;

@media ${devices.mobile} {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90vh;
}




`;
export const OrderSummary = styled.div`
width: 50%;
/* border: 1px solid var(--black-border); */
box-shadow:var(--shadow);

@media ${devices.mobile} {
  display: none;
}


.totalCart {
  border-top:1px solid ;
}

`;
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

@media ${devices.mobile} {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h3 {
    margin:0;
  }

  input {
    border: none;
    width: 90%;
    border-radius: 10px;
    padding: 14px 10px;
}
  .total {
    display: none;
  }
}

`;
