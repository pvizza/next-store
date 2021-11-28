const {Text,Password,Select,Relationshio,Checkbox} = require('@keystonejs/fields');

const user = {
  fields:{
    name: {
      type: Text,
      isRequired: true
    },
    email: {
      type:Text,
      isRequired: true,
      isUnique: true
    },
    password: {
      type:Password,
      isRequired: true
    },
    isAdmin: {
      type: Checkbox,
      isRequired:true
    }

  }
}

module.exports = user