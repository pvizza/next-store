export default function calcPrice(cart) {
  if(cart) {
  return cart.reduce((sum:number, cartItem:any) => {
    if (!cartItem.product) return sum; 
    return sum + cartItem.units * cartItem.product.price;
  }, 0);
}
}