import { graphQLSchemaExtension } from '@keystone-6/core';
import {addCart} from './addCart';



export const extendGraphqlSchema = graphQLSchemaExtension({ 
  typeDefs:`
  type Mutation {
    addCart(productId: ID): CartProduct
    
  }
`,
  
  resolvers: {
    Mutation: {
      addCart
    },
  }, 
});

