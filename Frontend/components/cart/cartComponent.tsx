import { useUser } from '../../hooks/useUser'
import calcPrice from '../../utils/calcPrice'
import ItemComponent from './itemComponent'
import {CartStyle} from './style'
import { useContext } from 'react'
import { CartContext } from '../../utils/cartContext'
import Checkout from '../checkout/checkout'



const CartComponent = () => {
  const cartUser = useUser()
  const cartContext = useContext(CartContext)

  return (
    <div>
      <CartStyle isOpen={cartContext.cart}>
      <header>
        <h1>Tu Carrito</h1>
        
      </header>
      <ul>
      {cartUser?.cart.map((item:any) => <ItemComponent key={item.id} id={item.id} item={item.product} units={item.units}/>  )}
      </ul>
      <footer>
        {/* <div> */}
        <h3>Total: ${calcPrice(cartUser?.cart)}</h3>
        {/* <p style={{margin:'0'}}>con envio $300</p> */}
        {/* </div> */}
        <Checkout products={cartUser}/>
      </footer>
      
      </CartStyle>
      </div>
  )
}

export default CartComponent