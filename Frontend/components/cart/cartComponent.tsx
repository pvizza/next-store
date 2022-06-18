import { useUser } from '../../hooks/useUser';
import calcPrice from '../../utils/calcPrice';
import ItemComponent from './itemComponent';
import { CartStyle } from './style';
import { useContext } from 'react';
import { CartContext } from '../../utils/cartContext';
import Checkout from '../checkout/checkout';

const CartComponent = () => {
  const cartUser = useUser();
  const cartContext = useContext(CartContext);

  return (
    <div>
      <CartStyle isOpen={cartContext.cart}>
        <header>
          <h1>Tu Carrito</h1>

        </header>
        <ul>
          {cartUser?.cart.map((item: any) => <ItemComponent key={item.id} id={item.id} item={item.product} units={item.units} />)}
        </ul>
        <div className='cart_total_container'>
          <h3 className='cart_total_price'>Total</h3> <span>${calcPrice(cartUser?.cart)}</span>
        </div>
        <footer>
          <Checkout products={cartUser} />
        </footer>

      </CartStyle>
    </div>
  );
};

export default CartComponent;
