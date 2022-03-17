import React from 'react'
import { Box, Flex, Button, Container, useColorModeValue } from '@chakra-ui/react'
import ImageHeader from '../components/ImageHeader'

const About = () => {
  return (
    <Flex
      direction={'column'}
      gap={0}
      >
      <ImageHeader />
      <Box 
        minHeight='calc(100vh - 584px)' 
        width={'100vw'}
        display='flex' 
        flexDir='column' 
        justifyContent='center' 
        alignItems='center' 
        p={{ base: 8 }}
        gap={8}
        bg={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container>
          We are a team of three who, despite our differences, found ourselves in a Web Development Bootcamp by KodeGo. Among other things, we mainly share one thing in common: a passion for coding.
        </Container>
        <Button>Learn more</Button>
      </Box>
    </Flex>
  )
}

export default About