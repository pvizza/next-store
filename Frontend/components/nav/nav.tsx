import Link from 'next/link'
import NavStyles from './style'
import SignOut from '../signOut/signOut'
import {useUser} from '../../hooks/useUser'
import { useState } from 'react'


const Nav = () => {
  const user = useUser()
  const [isAdmin,setIsAdmin] = useState<boolean>(true)
  return (
    <>
    {isAdmin && 
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
          </Link><Link href="/products">
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
    </NavStyles>
    }
        
       
    </>
  )
}

export default Nav
