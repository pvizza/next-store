import gql from 'graphql-tag';

export const ORDERS_QUERY = gql`
query order($id: !ID) {
  order(where:{
    id : $id
  }) {
    label
    user {
      id
      email
    }
    item{
      name
      price
      units
    }
    itemCount
    total
  } 
}
`