import {list} from '@keystone-6/core'
import {text,password,} from '@keystone-6/core/fields'


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
    })
  }
})

export default User