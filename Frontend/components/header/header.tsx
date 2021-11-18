import Nav from '../nav/nav'
import {Logo,HeaderContainer} from './style'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
  
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

const Header = () => {
  return (
    <HeaderContainer>
   
     
        <Logo>
          <Link href="/">
        STORE 
          </Link>
        </Logo>
      <div className='bar'>
      <Nav/>
      </div>
      
     </HeaderContainer>
    
  )
}

export default Header;