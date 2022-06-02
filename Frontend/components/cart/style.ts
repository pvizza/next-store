import styled from "styled-components";
import { devices } from "../../styles/device";

type Props = {
  isOpen?: boolean;
};

export const CartStyle = styled.div<Props>`
  padding: 20px;
  /* position: relative; */
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
  ${({ isOpen }) => isOpen && `transform: translateX(0);`};

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
      border-top: 1px solid;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    h3 {
      margin: 0;
    }
    .item_container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid;
      &:last-child {
        border-bottom: 0px;
      }
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
`;
