import gql from 'graphql-tag';

export const CHECKOUT_MUTATION = gql`
  mutation CHECKOUT_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      total
      item {
        name
      }
    }
  }`;
