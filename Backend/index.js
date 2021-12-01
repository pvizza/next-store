const dotenv = require('dotenv').config() 
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const {Text,Relationship } = require('@keystonejs/fields');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'Backend';

const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const fileAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  folder: 'store-app',
});

const adapterConfig = {
  mongoUri: process.env.DATABASE_URL,
}
const UserSchema = require('./Users');
const ProductSchema = require('./Products');
// const ProductImage = require('./ProductImages');

const isAdmin = ({ authentication: { item: user } }) => {
  return !!user && !!user.isAdmin;
}
const isLogged = ({ authentication: { item: user } }) => {
  console.log(user)
  return !!user 
}

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COCKIE_SECRET,
  cookie: {
    // secure: process.env.NODE_ENV === 'production', // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  },
});

keystone.createList('Product', ProductSchema);
keystone.createList('User', {
  fields: UserSchema.fields,
  access: {
    read: isLogged,
    update: isAdmin,
    create: isAdmin,
    delete: isAdmin,
  }
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secretField: 'password',
  }
});

keystone.createList('Image', {
  fields: {
    image: { type: CloudinaryImage, adapter: fileAdapter },
    title: { type: Text },
    product:{ type:Relationship, ref: 'Product.photo',many:true },
  },
  labelResolver: item => item.title,
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ 
    name: PROJECT_NAME, 
    enableDefaultRoute: true,
    authStrategy,
    isAccessAllowed: isAdmin
     
  })],
};
