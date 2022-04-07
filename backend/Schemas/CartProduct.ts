import { isSignedIn, rules } from './../access';
import { list } from "@keystone-6/core";
import {text,float,relationship,integer} from '@keystone-6/core/fields'

const CartProduct = list({
  
  access: {
    operation: {
      create:isSignedIn,
    },
    filter: {
      query:rules.canOrder,
      update:rules.canOrder,
      delete:rules.canOrder,
    }
  },
  
  fields:{
    units:integer({
      validation: {
        isRequired: true
      },
      defaultValue: 1
    }),
    product:relationship({ref: 'Product'}),
    user: relationship({ref: 'User.cart'}),
  },
 
  
})


export default CartProduct