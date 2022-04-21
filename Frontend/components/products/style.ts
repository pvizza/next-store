import styled from "styled-components";
import { devices } from "../../styles/device";

export const ProductBox = styled.div`
  border: 1px solid #eaeaea;
  margin: 0px;
 
  @media ${devices.mobileSmall} {
    
    display:flex;
    border: 1px solid #e5e5e78c;

    button {
      display: none;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: baseline;
      width: 70%;
      line-height:0px;
      padding:1rem 2rem;
    }

    h1 {
      margin:0;
      font-size:2rem;
      font-weight:500;

    }
    p {
      margin:0
    }

    .product_price {
      font-size:3rem;
      font-weight:700;
    }


    .img_product{
      width: 30%;
      padding:initial
    }

      }
  

`;