import React from 'react'
import { Box, Image, Heading, Text } from '@chakra-ui/react'

const ImageHeader = () => {
  return (
    <Box 
      width='100%' 
      height='480px' 
      bgImage={'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'} bgPosition='right'
      >
      <Box 
        bgColor={'rgba(8, 8, 8, 0.5)'} 
        width='100%' 
        height='100%' 
        display='flex' 
        flexDirection='column' 
        justifyContent='center' 
        alignItems='center' 
        gap='3em'>
        <Heading size='4xl' color='whiteAlpha.800' >
          Our Goal
        </Heading>
        <Heading size='lg' color='whiteAlpha.800'>
          To create awesome websites,<br />
          one page at a time.
        </Heading>
      </Box>
    </Box>
  )
}

export default ImageHeader