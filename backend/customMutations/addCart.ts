
import { KeystoneContext } from "@keystone-6/core/types";

export const addCart = async (root:any,{productId}:any, context:KeystoneContext) => {
  

  const contextSession = context.session;

  if (!contextSession?.itemId) {
    throw new Error("You must be logged in to do this!");
  }


  const CartItems = await context.query.CartProduct.findMany({
    where: { user: { id: { equals: contextSession.itemId } }, product: { id: { equals: productId } } },
    query: "id units",
  });

  const [existingCartItem] = CartItems;

  if (existingCartItem) {
    
    console.log('an item has been added to your cart')
    return await context.db.CartProduct.updateOne({
      where: { id: existingCartItem.id },
      data: { units: existingCartItem.units + 1 },
    });
  }

  return await context.db.CartProduct.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: contextSession.itemId } },
    },
  });
}