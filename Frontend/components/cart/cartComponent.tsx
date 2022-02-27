import { useUser } from '../../hooks/useUser'
import calcPrice from '../../utils/calcPrice'
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
      <ul>
      {cartUser?.cart.map((item:any) => <ItemComponent key={item.id}  item={item.product} units={item.units}/>  )}
      </ul>
      <footer>
        <h3>Total: ${calcPrice(cartUser?.cart)}</h3>
      
      </footer>
      </CartStyle>
      </div>
  )
}

export default CartComponent