import styled, { keyframes }  from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
    
  }
`;


const Form = styled.form`
  
  box-shadow: 0 0 5px 3px #0000000d;
  background: #00000009;
  border: 5px solid white;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10px;
 
 
  label {
    margin-bottom: 0.5rem;
    width: 50%;

   
  }
  input,
  textarea,
  select {
    width: 50%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 1px solid black;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: #0000ff;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
   
  }
  .ariabusy {
    border: 0;
    padding: 0;
    width: 50%;
    gap:1rem;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient( to right,#3800ff 0%,#9587f9 50%,#2b00c4 100% );
      
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;