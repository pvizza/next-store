import styled from 'styled-components';
import { devices } from '../../styles/device';

type Props = {
  isOpen?: boolean;
};

export const CartStyle = styled.div<Props>`
  padding: 20px;
  background: #ffff;
  position: fixed;
  top: 0;
  right: 0;
  overflow-x: auto;
  width: 40%;
  min-width: 400px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.2s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${({ isOpen }) => isOpen && 'transform: translateX(0);'};

  h1 {
    margin: 0;
    border-bottom: 5px solid;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-x: scroll;
  }

  footer {
    border-top: 5px solid;
    margin-top: 2rem;
    padding-top: 2rem;
  }

  @media ${devices.mobile} {
    width: 100%;
    padding: 2rem 2rem;
    min-width: 0;
    h1 {
      border-bottom: none;
      margin: 0;
    }
    footer {
      border:none;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    h3.cart_total_price {
      margin: 0;
      font-weight: 400;
    }
    .item_container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &:last-child {
        border-bottom: 0px;
      }
    }
    .cart_total_container {
      border-top: 1px solid rgba(0,0,0,.1);
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const ItemStyle = styled.li`
  display: flex;
  margin-top: 5px;
  p {
    margin: 0;
  }
  h3 {
    margin: 0;
  }

  @media ${devices.mobile} {
    width: 100%;
    .price_container {
      display: flex;
      justify-content: space-between;
      width: 60%;
      align-items: baseline;
      flex-wrap: wrap;

      h3{
        flex: 1 1 30%;
        font-weight: 400;
      }
        .units_container {
          width: 100%;
          display: flex;
          justify-content: end;
          margin-bottom: 40px;

              p {
                background: #8b8b8b82;
                width: 3.5rem;
                border-radius: 5px;
                text-align: center;
            }
        }
    }
  }
`;
