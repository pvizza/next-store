import { graphQLSchemaExtension } from '@keystone-6/core';
import {addCart} from './addCart';
import {checkout} from './checkout'



export const extendGraphqlSchema = graphQLSchemaExtension({ 
  typeDefs:`
  type Mutation {
    addCart(productId: ID): CartProduct
    checkout(token: String!): Order
    
  }
`,
  
  resolvers: {
    Mutation: {
      addCart,
      checkout
    },
  }, 
});

