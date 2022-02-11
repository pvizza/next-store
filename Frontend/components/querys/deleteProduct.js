import gql from 'graphql-tag';

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(where:{id: $id}) {
      id
      name
    }
  }
`;