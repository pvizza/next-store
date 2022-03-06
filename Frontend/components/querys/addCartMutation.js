import gql from 'graphql-tag';

  export const ADD_CART_MUTATION = gql`
    mutation ADD_CART_MUTATION($id: ID!) {
      addCart(productId: $id) {
        id
      }
    }
    `;