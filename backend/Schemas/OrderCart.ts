import { isSignedIn } from './../access';
import { list } from "@keystone-6/core";
import { float, integer, relationship, text } from "@keystone-6/core/fields";
import { isAdmin,rules } from "../access";

const OrderCart = list({

  access: {
    operation: {
      create:isSignedIn,
      
     
    },
    filter: {
      query:rules.canManageOrderItems,
      update:isAdmin,
      delete:isAdmin,
    }
  },

  fields:{
    name:text({
      validation: 
      {
        isRequired: true
      }}),
    price:float({
      validation:
      {
        isRequired: true
      }
    }),
    description:text({
      ui: 
      {
        displayMode:'textarea'
      },
    }),
    photo:relationship({
      many:true,
      ref: 'ProductImage',
      ui: 
      {
        displayMode: 'cards',
        cardFields: ['image', 'title'],
        inlineCreate: { fields: ['image', 'title'] },
        inlineEdit: { fields: ['image', 'title'] }, 
      }
    }),
    units:integer(),
    order:relationship({ref:'Order.item'})
  },
  ui: {
    listView: {
      initialColumns: ["name", "photo", "price", "units"],
    },
  },
})

export default OrderCart;