const {Text,Select } = require('@keystonejs/fields');

const Product = {
  //TODO : add access
  fields: {
    name: {
      type: Text,
      isRequired: true
    },
    description: {
      type: Text,
      isRequired: true,
      isMultiline: true
    },
    status: {
      type:Select,
      options: [
        {label:'Available',value:'AVAILABLE'},
        {label:'Unavailable',value:'UNAVAILABLE'}
      ]
    }

    }
  }

  module.exports = Product;