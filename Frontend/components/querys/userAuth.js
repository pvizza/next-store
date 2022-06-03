import gql from 'graphql-tag';

export const USER_AUTH_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          name
          id
          email
          
        }
      }
   ... on UserAuthenticationWithPasswordFailure {
    message
    
  }   
      
        
      
    }
  }
`;
