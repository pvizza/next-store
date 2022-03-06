import { useUser } from '../../hooks/useUser'
import calcPrice from '../../utils/calcPrice'
import ItemComponent from './itemComponent'
import {CartStyle} from './style'
import { useContext } from 'react'
import { CartContext } from '../../utils/cartContext'



const CartComponent = () => {
  const cartUser = useUser()
  const cartContext = useContext(CartContext)
  
  // TODO: 1 - IMPROVE DESIGN FOR CLOSE CART
  // TODO: 2 - IMPROVE DESIGN FOR CART ITEMS

  return (
    <div><CartStyle isOpen={cartContext.cart}>
      <header>
        <h1>Tu Carrito</h1>
        <button onClick={cartContext.toogleCart}>&times;</button>
      </header>
      <ul>
      {cartUser?.cart.map((item:any) => <ItemComponent key={item.id} id={item.id} item={item.product} units={item.units}/>  )}
      </ul>
      <footer>
        <h3>Total: ${calcPrice(cartUser?.cart)}</h3>
      
      </footer>
      </CartStyle>
      </div>
  )
}

export default CartComponent