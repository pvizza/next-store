import gql from 'graphql-tag';

export const USER_QUERY = gql`
query {
  authenticatedItem {
    ... on User {
      id
      email
      name
      cart {
        units
        id
        product {
          id
          name
          price
          photo {
            image {
              publicUrlTransformed
            }
          }

        }
      }
    }
  }
}
`;
