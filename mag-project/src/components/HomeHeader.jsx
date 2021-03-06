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

const HomeHeader = () => {
  return (
    <Box p={{ base: 0, md: 8 }}>
      <Stack 
        height={{ base: 'calc(100vh - 64px)', 
                  md: 'calc(66.66vh - 64px)' }} 
        direction={{ base: 'column', md: 'row' }}
      >
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
                Reach out
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                to Us
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              MAG Consultants are here to help your recruitment needs
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} display={'flex'} justifyContent={'center'}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.600',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/Contact';
                }}>
                Contact Us
              </Button>
              <Button
                rounded={'full'}
                bg={'gray.400'}
                color={'white'}
                _hover={{
                  bg: 'gray.600',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/Services';
                }}>
                What We Do
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} >
          <Image
            alt={'Landing Page Image'}
            objectFit={'cover'}
            src={'./mainpic.avif'}
          />
        </Flex>
      </Stack>
    </Box>
  )
}

export default HomeHeader