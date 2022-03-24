import Nav from '../nav/nav'
import {Logo,HeaderContainer} from './style'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import Search from '../search/search'
import Checkout from '../checkout/checkout'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
  
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

const Header = () => {
  return (
  
    <HeaderContainer>
    <div className='bar'>
    
        <Logo>
          <Link href="/">
        STORE 
          </Link>
        </Logo>
        <Nav/>
        </div>
        <div className='sub-bar'>
          {/* <Search/> */}
        </div>
      
     
      
     </HeaderContainer>
     
  )
}

export default Header;