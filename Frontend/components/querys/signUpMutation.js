import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
mutation signup ($email: String!, $password: String!, $name: String!) {
  createUser(data: {
    email: $email,
    password: $password, 
    name: $name
  }) {
    id
    name
    email
  }
}
`;

export const RESET_PASSWORD_MUTATION = gql`
mutation resetPassword ($email: String!) {
  sendUserPasswordResetLink(email: $email) 
}

`;

export const NEW_PASSWORD_MUTATION = gql`
mutation newPassword ($password: String!, $token: String!,$email: String!) {
  redeemUserPasswordResetToken(token: $token, password: $password, email: $email){
    code
    message
  }

}`;
