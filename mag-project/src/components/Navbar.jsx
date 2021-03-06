import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';


const Links = ['Home', 'About', 'Developers', 'Services', 'Testimonials', 'Contact'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    fontSize={'lg'}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children === 'Home' ? '/' : `/${children}`}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          variant={'ghost'}
          size={'lg'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ lg: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <Link
              fontWeight={'bolder'}
              // fontSize={'4xl'}
              _hover={{
                textDecoration: 'none',
              }} href={"/"}>MAG Consultants
            </Link>
          </Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', lg: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ lg: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}


    </Box>
  );
}