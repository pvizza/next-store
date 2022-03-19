import { KeystoneContext } from "@keystone-6/core/types";
import {OrderCreateInput} from '.keystone/types'


export const checkout = async (root: any, token: string, context: KeystoneContext) => {


const session  = context.session;
if(!session.itemId) {
  throw new Error('You must be logged in to do this!');
}
const currentUser = await context.query.User.findOne({
  where:{id:session.itemId},
  query:`
  id
  name
  email
  cart {
    id
    units
    product {
      id
      name
      price
      description
      photo {
        id
        image {
          id
          publicUrlTransformed
        }
      }
    }
  }
  `
})
console.dir(currentUser, {depth:null})

const cartItems = currentUser.cart.filter((item:any) => item.product)
const amount = cartItems.reduce((acc:number, item:any) => acc + item.product.price * item.units, 0) 

const cartToOrder = cartItems.map((item:any) => {
  let cart = {
    name:item.product.name,
    price:item.product.price,
    units:item.units,
    // photo: { connect: { id: item.product.photo.id } },
    // todo: photo id error
  }
  return cart
})

const createOrder = await context.db.Order.createOne({
  data: {
    total: amount,
    item: {create: cartToOrder},
    user: {connect: {id:session.itemId}},
  }
})

const cartItemIds = currentUser.cart.map((cartItem:any) => cartItem.id);

await context.query.CartProduct.deleteMany({
  where: cartItemIds.map((id: string) => ({ id })),
});

return createOrder;


}