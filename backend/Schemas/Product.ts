import { config, list } from '@keystone-6/core';
import {text,select,float,relationship} from '@keystone-6/core/fields'

const Product = list({
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
  })
},
})

export default Product