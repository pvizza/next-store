const {Text,Password,Select,Relationshio} = require('@keystonejs/fields');

const post = {
  fields: {
    title: { 
      type: Text,
      isRequired: true
    },
    email: {
      type:Text,
      inUnique: true,
    },
    password: {
      type:Password
    }
  }
  
}

module.exports = post