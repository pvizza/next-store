import gql from 'graphql-tag';

export const ORDERS_QUERY = gql`
query order($id: ID!) {
  order(where:{
    id : $id
  }) {
    label
    user {
      id
      email
      name
    }
    item{
      name
      price
      units
    photo{
      image{
        publicUrlTransformed
      }
    }  
    }
    itemCount
    total
  } 
}
`;
