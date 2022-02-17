import { list } from "@keystone-6/core";
import {text,float,relationship,integer} from '@keystone-6/core/fields'

const CartProduct = list({
  
  
  fields:{
    units:integer({
      validation: {
        isRequired: true
      },
      defaultValue: 1
    }),
    product:relationship({ref: 'Product'}),
    user: relationship({ref: 'User.cart'})
  
  },
 
  
})


export default CartProduct