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
import { Role } from './Schemas/Role';
import {admin} from './utils/admin'


const DB_URL = process.env.DATABASE_URL 
const FRONT_URL = process.env.FRONT_URL || 'http://localhost:3000';




export default withAuth(
  config({
    server:{
      port: 4000,
      cors: { origin: [FRONT_URL], credentials: true },
    },
    db: {
      provider: 'sqlite',
      url:'file:./keystone.db',
    },
    
    
    
    ui: {
      isAccessAllowed: admin,
    },
    lists: {
      User,
      Product,
      ProductImage,
      CartProduct,
      Order,
      OrderCart,
      Role
    },
    extendGraphqlSchema,
    session,
    
  })
);
