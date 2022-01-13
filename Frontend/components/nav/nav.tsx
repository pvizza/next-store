import Link from 'next/link'
import NavStyles from './style'
const Nav = () => {
  return (
   < NavStyles>
      <Link href="/">
      <a> Inicio </a>
        </Link>
        <Link href="/products">
       <a> Productos </a>
        </Link>
        <Link href="/cart">
       <a> Carrito </a>
        </Link>
        <Link href="/sell">
       <a> Cuenta </a>
        </Link>
        </NavStyles>
    
  )
}

export default Nav
