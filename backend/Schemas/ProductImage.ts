import { config, list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import {relationship, text} from '@keystone-6/core/fields'

const cloudinary= {
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  folder: 'store-app',
}

const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Image',
    }),
    title: text(),
    product:relationship({
      ref: 'Product.photo',
    })
  },
  ui: 
  {
    listView: {
      initialColumns: ['image', 'title'],
    }
  }
})

export default ProductImage