import type { DatabaseConfig } from '@keystone-6/core/types';
import { config } from '@keystone-6/core';
import 'dotenv/config'
import { lists } from './schema';
import { withAuth, session } from './auth';
import User from './Schemas/User';
import Product from './Schemas/Product';
import ProductImage from './Schemas/ProductImage';
import CartProduct from './Schemas/CartProduct';
import { extendGraphqlSchema } from './customMutations';
import Order from './Schemas/Order';
import OrderCart from './Schemas/OrderCart';

const DB_URL = process.env.DATABASE_URL 
const FRONT_URL = process.env.FRONT_URL || 'http://localhost:3000';


export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    server:{
      port: 4000,
      cors: { origin: [FRONT_URL], credentials: true },
    },
    db: {
      provider: 'postgresql',
      url:process.env.DATABASE_URL,
    },
    
    
    ui: {
      isAccessAllowed: ({session}) => !!session?.data,
    },
    lists: {
      User,
      Product,
      ProductImage,
      CartProduct,
      Order,
      OrderCart,
    },
    extendGraphqlSchema,
    session,
  })
);
