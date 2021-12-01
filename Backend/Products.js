const {Text,Select,Integer,Float,Relationship } = require('@keystonejs/fields');

const Product = {
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
    photo: {
      type: Relationship,
      ref: 'Image.product',
      many: true,
      //TODO: THE IMAGE IS IDENTIFY BY THE PRODUCT TITLE (SEE RELATONSHIP)
    },
    status: {
      type:Select,
      options: [
        {label:'Available',value:'AVAILABLE'},
        {label:'Unavailable',value:'UNAVAILABLE'}
      ],
      defaultValue: 'AVAILABLE',
    },
    price: {
      type:Float
    }

    }
  }

  module.exports = Product;