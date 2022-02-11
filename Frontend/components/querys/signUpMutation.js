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
`