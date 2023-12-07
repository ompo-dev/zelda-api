// pages/_app.js
import type {AppProps} from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {extendTheme} from '@chakra-ui/react'

import {AuthProvider} from '../context/AuthContext'

const colors = {
  zelda:{
    900:'#12131B',
    400:'#1b1c29',
    100:'#c6c6c6'
  },
  button:{
    cta:'#246238',
    default:'#ffffff',
    gray:'#dfdfdf',
    danger:'#ff4040'
  },
  green:{
    900:'#24D23C'
  }
}

export const theme = extendTheme({colors})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}
export default MyApp