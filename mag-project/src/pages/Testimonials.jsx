import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import TestimonyCard from '../components/TestimonyCard';
import './Testimonials.css'

export default function WithSpeechBubbles() {
  return (
    <Box width={'100vw'} bg={useColorModeValue('gray.200', 'gray.700')}>
      <Container maxW={'container.lg'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>What do our clients say about us?</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          className={useColorModeValue('fade-light', 'fade-dark')}
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          overflow={'overlay'}
          pb={8}
          px={4}>
          <TestimonyCard name='Marcus Garcia' title='Web Developer' heading='Foo' text='Bar' />
          <TestimonyCard name='Gelo Torres' title='Web Developer' heading='Bar' text='Foo' />
          <TestimonyCard name='Alex Poe' title='Web Developer' heading='Foo' text='Bar' />
          <TestimonyCard name='Marcus Garcia' title='Web Developer' heading='Foo' text='Bar' />
          <TestimonyCard name='Gelo Torres' title='Web Developer' heading='Bar' text='Foo' />
          <TestimonyCard name='Alex Poe' title='Web Developer' heading='Foo' text='Bar' />
        </Stack>
      </Container>
    </Box>
  );
}