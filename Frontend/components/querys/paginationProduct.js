import gql from 'graphql-tag';

export const PAGINATION_PRODUCT_QUERY = gql`
  query paginationProduct {
    productsCount
  }
`