import gql from 'graphql-tag';

export const DELETE_CART_MUTATION = gql`
  mutation DeleteCartMutation($id: ID!) {
    deleteCartProduct(where:{id: $id}) {
      id
      }
      }`;
