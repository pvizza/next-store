import gql from 'graphql-tag';

export const NEW_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $description: String!
    $price: Float!
    $image: Upload
   
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: AVAILABLE
        photo: { create: { image: $image,title: $name } }
        
      }
    ) {
      id
      price
      description
      name
    }
  }
`;