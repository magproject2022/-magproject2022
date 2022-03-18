import React from 'react'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';


const Developers = () => {
  return (
    <div>
      <Heading m={8}>
        Meet the Team
      </Heading>
      <Flex
        direction={'row'}  
        wrap={'wrap'}
        justify={'center'}
        align={'center'}
        gap={8}
        mb={8}
      >
        <Box
          height={'400px'}
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={'./torres.jpg'}
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>

          <Flex 
            direction={'column'}
            justify={'space-between'}
            height={'calc(100% - 168px)'}
            p={6}
          >
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Michael Angelo Torres
              </Heading>
              <Text color={'gray.500'}>Full Stack Developer</Text>
            </Stack>


            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open('https://whyteknight.github.io/portfolio/');
              }} 
            >
              Visit Profile
            </Button>
          </Flex>
        </Box>
        <Box
          height={'400px'}        
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                './garcia.jpg'
              }
              alt={'Author'}
              css={{
                border: '3px solid white',
              }}
            />
          </Flex>

          <Flex 
            direction={'column'}
            justify={'space-between'}
            height={'calc(100% - 168px)'}
            p={6}

          >
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Marcus Rejinal Garcia
              </Heading>
              <Text color={'gray.500'}>Full Stack Developer</Text>
            </Stack>


            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open('https://marcusrejinalgarcia.github.io/');
              }} 
            >
              Visit Profile
            </Button>
          </Flex>
        </Box>
        <Box
          height={'400px'}
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                './poe.jpg'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>

          <Flex 
            direction={'column'}
            justify={'space-between'}
            height={'calc(100% - 168px)'}
            p={6}
          >
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Alexander N. Poe Jr.
              </Heading>
              <Text color={'gray.500'}>Full Stack Developer</Text>
            </Stack>


            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open('https://whyteknight.github.io/portfolio/');
              }} 
            >
              Visit Profile
            </Button>
          </Flex>
        </Box>
      </Flex>

    </div>

  )
}

export default Developers