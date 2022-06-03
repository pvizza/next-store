import Link from 'next/link';
import NavStyles from './style';
import SignOut from '../signOut/signOut';
import { useUser } from '../../hooks/useUser';
import { useState, useContext } from 'react';
import CartComponent from '../cart/cartComponent';
import { CartContext } from '../../utils/cartContext';
import CartCount from '../cart/cartCount';
import { NavContainer, Navbar, Menu, Item, MenuMobile, MenuCart } from './styles';
import { Logo } from '../header/style';
import { FaCartPlus } from '@react-icons/all-files/fa/FaCartPlus';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { FaRegWindowClose } from '@react-icons/all-files/fa/FaRegWindowClose';

const Nav = () => {
  const user = useUser();
  const cartContext = useContext(CartContext);
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);

  const openCart = () => {
    setMenu(false);
    cartContext.toogleCart();
  };
  const closeMenu = () => {
    setMenu(!menu);
    cartContext.closeCart();
  };

  return (
    <>
    <CartComponent/>
    {isAdmin &&
        <>
      <NavContainer>
        <Navbar>
        <MenuMobile onClick={closeMenu}><GiHamburgerMenu style={{ fontSize: '2.8rem', color: '#fff', paddingLeft: '5px' }}/></MenuMobile>
        <Logo>
          <Link href="/">STORE</Link>
        </Logo>
        <MenuCart onClick={openCart}>{ !cartContext.cart ? <FaCartPlus style={{ fontSize: '2.8rem', color: '#fff', paddingRight: '5px' }}/> : <FaRegWindowClose style={{ fontSize: '2.8rem', color: '#fff', paddingRight: '5px' }}/>}
        <CartCount count={user?.cart.reduce((sum:number, cartItem:any) => sum + cartItem.units, 0)}/>
        </MenuCart>
        <Menu open={menu}>
        <Item>
        <Link href="/products?page=1"><a onClick={closeMenu}>Productos</a></Link>
        </Item>
        <Item>
        <Link href="/products?page=1"><a onClick={closeMenu}>Categorias</a></Link> {/* TODO: Categorias */}
        </Item>
          <Item>
        <Link href="/"><a onClick={closeMenu}> Crear Cuenta </a></Link>
          </Item>
          <Item>
        <Link href="/newProduct"><a onClick={closeMenu}> Crear producto</a></Link>
          </Item>
          <Item>
        <SignOut/>
        </Item>
        <Item style={{ flexGrow: 0.1, justifyContent: 'flex-end' }} >
          <button onClick={cartContext.toogleCart}> Carrito<FaCartPlus style={{ color: '#fff' }}/>
          <CartCount count={user?.cart.reduce((sum:number, cartItem:any) => sum + cartItem.units, 0)}/>
          </button>
          </Item>
        </Menu>
        </Navbar>
    </NavContainer>
        </>
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
    <NavContainer>
     <Navbar>
     <MenuMobile onClick={closeMenu}><GiHamburgerMenu style={{ fontSize: '2.8rem', color: '#fff', paddingLeft: '5px' }}/></MenuMobile>
     <Logo>
       <Link href="/">STORE</Link>
     </Logo>
     <MenuCart onClick={openCart}>{ !cartContext.cart ? <FaCartPlus style={{ fontSize: '2.8rem', color: '#fff', paddingRight: '5px' }}/> : <FaRegWindowClose style={{ fontSize: '2.8rem', color: '#fff', paddingRight: '5px' }}/>}
     </MenuCart>
     <Menu open={menu}>
     <Item>
    <Link href="/products?page=1"><a onClick={closeMenu}>Productos</a></Link>
    </Item>
    <Item>
    <Link href="/products?page=1"><a onClick={closeMenu}>Categorias</a></Link> {/* TODO: Categorias */}
    </Item>
      <Item>
    <Link href="/acount"><a onClick={closeMenu}> Crea Tu Cuenta </a></Link>
      </Item>
      <Item>
    <Link href="/signIn"><a onClick={closeMenu}> Iniciar Sesión </a></Link>
    </Item>
    <Item style={{ flexGrow: 0.1, justifyContent: 'flex-end' }} >
      <button onClick={cartContext.toogleCart}> Carrito<FaCartPlus style={{ color: '#fff' }}/>
      <CartCount count={user?.cart.reduce((sum:number, cartItem:any) => sum + cartItem.units, 0)}/>
      </button>
      </Item>
    </Menu>
    </Navbar>
    </NavContainer>

    }

    </>
  );
};

export default Nav;
