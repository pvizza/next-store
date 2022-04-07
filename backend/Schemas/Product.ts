import { config, list } from '@keystone-6/core';
import {text,select,float,relationship} from '@keystone-6/core/fields'
import { isSignedIn,rules,isAdmin } from '../access';

const Product = list({
  access: {
    operation: {
      create: isAdmin,
    },
    filter: {
      update: rules.canManageProducts,
      delete: rules.canManageProducts,
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
    validation:
    {
      isRequired: true
    }
  }),
  status:select({
    options: [
      { label: 'stock', value: 'stock' },
      { label: 'outstock', value: 'outstock' },
    ],
    defaultValue: 'stock',
    ui: {
      displayMode: 'segmented-control',
    },
  }), 
  photo:relationship({
    many:true,
    ref: 'ProductImage.product',
    ui: 
    {
      displayMode: 'cards',
      cardFields: ['image', 'title'],
      inlineCreate: { fields: ['image', 'title'] },
      inlineEdit: { fields: ['image', 'title'] }, 
    }
  }),
  user: relationship({
    ref: 'User.products',
    hooks: {
      resolveInput({resolvedData, context }) {
        if (!resolvedData.user && context.session?.itemId) {
          return { connect: { id: context.session?.itemId } };
        }
        return resolvedData.user;
      },
    },
  })
},
})

export default Product