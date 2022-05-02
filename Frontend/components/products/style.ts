import styled from "styled-components";
import { devices } from "../../styles/device";

export const ProductBox = styled.div`
  border: 1px solid #eaeaea;
  margin: 0px;
 
  @media ${devices.mobile} {
    
    /* display:flex; */
    border: 1px solid #e5e5e78c;
    border-radius: 10px;
    background-color:white;
    

    button {
      /* display: none; */
    }

    .title_product {
      display: flex;
      padding:1rem;
      flex-direction:column ;
      line-height:30px;
     
    }

    .description_product {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      }

    .icon_add_product {
      background-color: #586dac;
      border-radius: 49% 51% 49% 51% / 46% 49% 51% 54%;
      padding:0px 1px;

      &:hover {
        background-color: #164ff9;
        transition:ease-in 0.5s;
      }
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
      font-size:2rem;
      font-weight:500;
    }


    .img_product{
      width: 100%;
      padding:1rem;
      margin: 0 auto;

    }

    .buy_product {
      display: none;
    }

      }
  

`;