import React from 'react'
import { Box, Image, Heading, Text } from '@chakra-ui/react'

const ImageHeader = () => {
  return (
    <Box width='100%' height='240px' padding='1em' bgImage={'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'} display='flex' justifyContent='start' alignItems='end'>
      <Heading size={'4xl'} color='whiteAlpha.800' >About Us</Heading>
    </Box>
  )
}

export default ImageHeader