import Link from 'next/link'
import NavStyles from './style'
import SignOut from '../signOut/signOut'
import {useUser} from '../../hooks/useUser'
import { useState,useContext } from 'react'
import CartComponent from '../cart/cartComponent'
import { CartContext } from '../../utils/cartContext'
import CartCount from '../cart/cartCount'



const Nav = () => {
  const user = useUser()
  const cartContext = useContext(CartContext)
  const [isAdmin,setIsAdmin] = useState<boolean>(true)
  return (
    <>
    <CartComponent/>
    {isAdmin && 
        <><NavStyles>
          <Link href="/">
            <a> Inicio </a>
          </Link><Link href="/products?page=1">
            <a> Productos </a>
          </Link>
            <button onClick={cartContext.toogleCart}> Carrito 
            <CartCount count={user?.cart.reduce((sum:number,cartItem:any) => sum + cartItem.units,0)}/>
            </button>
          
        </NavStyles>
        <NavStyles>
        <Link href='/newProduct'>
              <a>Crear Producto</a>
            </Link>
            <SignOut />
          </NavStyles></>
        }

    {(user && !isAdmin) &&
    <><NavStyles>
          <Link href="/">
            <a> Inicio </a>
          </Link><Link href="/products?page=1">
            <a> Productos </a>
          </Link><Link href="/cart">
            <a> Carrito </a>
          </Link>
        </NavStyles>
        <NavStyles>
        <SignOut />
          </NavStyles></>
    
    }
    {(!user && !isAdmin) && 
    <NavStyles>
          
    <Link href="/acount">
   <a> Crea Tu Cuenta </a>
    </Link>
    <Link href="/signIn">
    <a> Iniciar Sesión </a>
    </Link>
    <Link href="/products?page=1">
      <a>Productos</a>
      </Link>
    </NavStyles>
    }
        
       
    </>
  )
}

export default Nav
