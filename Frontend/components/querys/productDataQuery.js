import gql from 'graphql-tag';

export const PRODUCT_DATA_QUERY = gql`
  query PRODUCT_DATA_QUERY($id: ID!) {
    product(where: {
       id: $id 
      }) {
      name
      price
      description
      id
      photo {
        id
        title
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;