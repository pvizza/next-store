import gql from 'graphql-tag';


export const SEARCH_PRODUCTS_QUERY = gql`
  query findProduct($searchTerm: String!) {
    products(where:{OR:
      [
        {
          name:{contains: $searchTerm}
        },
        
      ]
    }) {
      id
      name
    }
  }
`


// {
//   description:{contains: $searchTerm}
// }