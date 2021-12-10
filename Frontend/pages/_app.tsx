import '../styles/globals.css'
import "nprogress/nprogress.css";
import type { AppProps } from 'next/app'
import Main from '../components/main/main'
import {ApolloProvider} from '@apollo/client'
import configApollo from '../configApollo'

function MyApp({ Component, pageProps,apollo }: AppProps) {
  return (
  
      <ApolloProvider client={apollo}>
      <Main>
      <Component {...pageProps} />
      </Main>
      </ApolloProvider>
  )
  
}

export default configApollo(MyApp)
