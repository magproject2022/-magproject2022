import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Stack,
  Heading,
  Text,
  Avatar,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import randomInteger from 'random-int';

const TestimonyCard = (props) => {
  return (
    <Flex direction={'column'} align={'center'} >
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        grow={'1'}
        minW={'240px'}
        height={'280px'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        <Heading as={'h3'} fontSize={'xl'}>
          {props.heading}
        </Heading>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.600', 'gray.400')}
          fontSize={'sm'}
          overflow={'overlay'}
        >
          {props.text}
        </Text>
      </Stack>
      <Flex align={'center'} mt={8} direction={'column'}>
        <Avatar src={`https://i.pravatar.cc/${randomInteger(500)}`} alt={props.name} mb={2} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600}>{props.name}</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {props.title}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default TestimonyCard;