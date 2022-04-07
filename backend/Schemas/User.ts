import { isSignedIn, permissions } from './../access';
import {list} from '@keystone-6/core'
import {text,password,relationship, checkbox} from '@keystone-6/core/fields'
import { isAdmin,rules } from '../access'


const User = list({
  //HERE WE CAN ADD THE PERMISSIONS
  access: {
    operation: {
     
      create: () => true
    },
    filter: {
      query:rules.canManageUsers,
      update:isAdmin,
      delete:isAdmin,
    }
  },
  ui: {
    
    hideCreate: args => !isAdmin(args),
    hideDelete: args => !isAdmin(args),
 },
  fields:{
    name:text({
      validation: 
      {
        isRequired: true
      }}),
    password:password({
      validation: 
      {
        isRequired: true
      }}),
    email: text({
      validation: 
      {
        isRequired: true
      },
      isIndexed: 'unique'
    }),
    isAdmin: checkbox({
      defaultValue: false,
      label: 'User is admin',
    }),
    cart:relationship({
      ref: 'CartProduct.user',
      many: true,
      
    }),
    products:relationship({
      ref: 'Product.user',
      many: true
    }),
    orders:relationship({
      ref: 'Order.user',
      many:true,
      
    }),
    role:relationship({
      ref: 'Role.assignedTo',
      // access: {
      //   create: permissions.canManageUsers,
      //   update: permissions.canManageUsers,
      // },
     
    })
  }
})

export default User