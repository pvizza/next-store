import '../styles/globals.css'
import "nprogress/nprogress.css";
import type { AppProps } from 'next/app'
import Main from '../components/main/main'
import {ApolloProvider} from '@apollo/client'
import configApollo from '../configApollo'
import {CartProvider} from '../utils/cartContext';

function MyApp({ Component, pageProps,apollo }: AppProps) {
  return (
  
      <ApolloProvider client={apollo}>
      <CartProvider>
      <Main>
      <Component {...pageProps} />
      </Main>
      </CartProvider>
      </ApolloProvider>
  )
  
}

export default configApollo(MyApp)
