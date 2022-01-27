import Link from 'next/link'
import NavStyles from './style'
const Nav = () => {
  return (
    <>
   <NavStyles>
      <Link href="/">
      <a> Inicio </a>
        </Link>
        <Link href="/products">
       <a> Productos </a>
        </Link>
        <Link href="/cart">
       <a> Carrito </a>
        </Link>
        </NavStyles>
        <NavStyles>
        <Link href="/acount">
       <a> Crea Tu Cuenta </a>
        </Link>
        <Link href="/signIn">
        <a> Iniciar Sesión </a>
        </Link>
        </NavStyles>
       
    </>
  )
}

export default Nav
