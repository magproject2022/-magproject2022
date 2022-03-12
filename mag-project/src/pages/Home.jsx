import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
//import Features from '../components/Features';

const Home = () => {
  return (
    <Box>
    <Stack height={'calc(100vh - 64px)'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Awesome Websites 
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              just for you
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} display={'flex'} justifyContent={'center'}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href='/About';
              }}>
              Learn More
            </Button>
            <Button 
              rounded={'full'}
              onClick={(e) => {
                e.preventDefault();
                window.location.href='/Contact';
              }}>
              Contact Us
              </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex> 
    </Stack>
    <HomeSection1/>
    <HomeSection2/>
    {/* <Features/> */}
    </Box>

  )
}

export default Home