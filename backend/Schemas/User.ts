import {list} from '@keystone-6/core'
import {text,password,relationship} from '@keystone-6/core/fields'


const User = list({
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
    cart:relationship({
      ref: 'CartProduct.user',
      many: true
    }),
    products:relationship({
      ref: 'Product.user',
      many: true
    })
  }
})

export default User