import React from 'react'
import Layout from './layout/layout'
import { ChakraProvider } from '@chakra-ui/react'

const Home = () => {
  return (
    <ChakraProvider>
      <Layout/>
    </ChakraProvider>
  )
}

export default Home
