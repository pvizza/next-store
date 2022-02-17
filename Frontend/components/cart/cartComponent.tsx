import { useUser } from '../../hooks/useUser'
import ItemComponent from './itemComponent'
import {CartStyle} from './style'



const CartComponent = () => {
  const cartUser = useUser()
  console.log(cartUser)
  return (
    <div><CartStyle isOpen={true}>
      <header>
        <h1>Tu Carrito</h1>
      </header>
      {cartUser.cart.map((item) => <ItemComponent key={item.id} item={item.product} units={item.units}/>  )}
      </CartStyle></div>
  )
}

export default CartComponent