const {Text,Select,Relationshio} = require('@keystonejs/fields');

const post = {
  fields: {
    title: { 
      type: Text,
      isRequired: true
    },
    body: {
      type:Text,
      inMultiline: true,
    }
  },
  
}

module.exports = post