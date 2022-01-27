import gql from 'graphql-tag';

export const UPDATE_PRODUCT_MUTATION = gql`
mutation UPDATE_PRODUCT_MUTATION(
  $id: ID!
  $name: String
  $description: String
  $price: Float
  $image: Upload
) {
  updateProduct(
    id: $id
    data: { 
      name: $name
      description: $description
      price: $price
      photo: { create: { image: $image,title: $name } }
      }
  ) {
    id
    name
    description
    price
  }
}
`;

// TODO: Mutation to update image (Photos are currently being edited but not stepped on)