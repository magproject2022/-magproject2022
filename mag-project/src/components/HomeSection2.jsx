import React from 'react'

import {
    Box,
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';

  import {GiEcology} from 'react-icons/gi';  
  import {FaHandsHelping} from 'react-icons/fa';  
  import {GiThreeFriends} from 'react-icons/gi';

const Feature = (props) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={props.iconBg}>
          {props.icon}
        </Flex>
        <Text fontWeight={600}>{props.text}</Text>
      </Stack>
    );
  };
  
  export default function HomeSection2() {
    return (
      <Box bg={useColorModeValue('blue.50', 'gray.700')}
      >
        <Container maxW={'5xl'} py={12} 
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={
                  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                objectFit={'cover'}
              />
            </Flex>
            <Stack spacing={4}>
              <Text
                textTransform={'uppercase'}
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.100', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                Our Story
              </Text>
              <Heading>A little glimpse of our Heritage</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                MAG Consultants was founded on 2022 whose primary aim is to 
                get you on board in the I.T. Industry
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }>
                <Feature
                  icon={
                    <GiEcology w={5} h={5} />
                  }
                  iconBg={useColorModeValue('orange.100', 'orange.900')}
                  text={'Diversity'}
                />
                <Feature
                  icon={
                  <FaHandsHelping w={5} h={5} />
                  }
                  iconBg={useColorModeValue('green.100', 'green.900')}
                  text={'Commitment'}
                />
                <Feature
                  icon={
                    <GiThreeFriends w={5} h={5} />
                  }
                  iconBg={useColorModeValue('purple.100', 'purple.900')}
                  text={'Teamwork'}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
