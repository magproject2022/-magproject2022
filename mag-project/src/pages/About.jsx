import React from 'react'
import { Box, Image, Heading, Text, Button, Container } from '@chakra-ui/react'
import ImageHeader from '../components/ImageHeader'

const About = () => {
  return (
    <>
      <ImageHeader />
      <Box minHeight='calc(100vh - 584px)' display='flex' flexDir='column' justifyContent='center' alignItems='center' gap='2em'>
        <Container>
          We are a team of three who, despite our differences, found ourselves in a Web Development Bootcamp by KodeGo. Among other things, we mainly share one thing in common: a passion for coding.
        </Container>
        <Button>Learn more</Button>
      </Box>
    </>
  )
}

export default About