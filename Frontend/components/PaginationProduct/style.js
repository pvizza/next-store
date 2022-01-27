import styled from 'styled-components';

export const PaginationStyle = styled.div`
  * {
    margin: 0;
    padding: 5px 25px;
    border-right: 1px solid gray;
    font-weight: 600;
    &:last-child {
      border-right: 0;
    }
  }

  text-align: center;
  margin: 2rem auto 0;
  border: 1px solid gray;
  border-radius: 10px; 
  align-content: center;
  align-items: stretch;
  justify-content: center;
  display: flex;
 
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  
`
export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
  
`