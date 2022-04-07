import { integer, relationship, virtual } from '@keystone-6/core/fields';
import { list } from "@keystone-6/core";
import { graphql } from '@graphql-ts/schema';
import { isAdmin, isSignedIn,rules } from '../access';
// import {OrderOrderByInput} from '.keystone/types'


const Order = list({

  access: {
    operation: {
      create:isSignedIn,

    },
    filter: {
      query:rules.canOrder,
      update:isAdmin,
      delete:isAdmin,
    }
  },
 

 fields: {
   label: virtual({
     field:graphql.field({
       type:graphql.String,
       resolve(item){
         return `Order id: ${item.id} `;
       }
     })
   }),
   item:relationship({
     ref: 'OrderCart.order',
     many: true
    }),
    user:relationship({
      ref:'User.orders',
    }),
    total:integer(),

 }
})

export default Order;