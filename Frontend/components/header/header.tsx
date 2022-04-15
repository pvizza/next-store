import Nav from '../nav/nav'
import {Logo,HeaderContainer, HeaderMobile} from './style'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import Search from '../search/search'
import { useState } from 'react'


Router.events.on('routeChangeStart', () => {
  NProgress.start()
  
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

const Header = () => {
  const [menu,setMenu] = useState<boolean>(false)
  console.log(menu)
  return (
    <>
    {/* <Logo>
    Store
    </Logo> */}
    <Nav/>

      </>

    // <HeaderContainer open={menu}>
    // <div className='bar'>
    
    //     <Logo>
    //       <Link href="/">STORE</Link>
    //     </Logo>
    //     <Nav/>
    //     </div>

    //     <HeaderMobile>
    //     <span onClick={() => setMenu(!menu) }>🍔</span>
    //     <Nav/>
    //   </HeaderMobile>



    //     <div className='sub-bar'>
        
    //     </div>
      
      
    //  </HeaderContainer>
       
  )
}

export default Header;