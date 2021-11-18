import Link from 'next/link'
const Nav = () => {
  return (
    <div>
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
     
    </div>
  )
}

export default Nav
