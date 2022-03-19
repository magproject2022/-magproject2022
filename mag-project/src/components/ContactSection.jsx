import {React, useState} from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMail } from "react-icons/hi";
import { SiFacebook, SiGithub, SiDiscord } from "react-icons/si";

export default function ContactSection() {

      const [input, setInput] = useState('')
      const [email, setEmail] = useState('')

      const handleInputChange = (e) => setInput(e.target.value)

      const isError = input === ''

      const handleEmailChange = (e) => setEmail(e.target.value)

      const isErrorEmail = email === ''

  return (
    // <Flex direction={'column'} width={'100vw'}
    //   justify={'center'} align={'center'}
    // >
    <Container maxW="container.xl" centerContent>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        wrap={'wrap'}
        justify={'center'}
        align={'center'}
        gap={{ base: 6 }}
        my={{ base: 4, md: 8 }}
        mx={{ base: 0, sm: 4, md: 8 }}
        px={{ base: 0, md: 6 }}
        pt={6}
        pb={{ base: 0, md: 6 }}
        rounded={'lg'}
        bg={useColorModeValue("#9DC4FB", "teal.600")}
      >
        <Box width={'280px'}>
          <Heading>Contact Us</Heading>
          <Text mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue('gray.800', 'gray.100')}>
            Fill up the form
          </Text>
          <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
            <VStack pl={0} spacing={3} alignItems="center">
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color={useColorModeValue('gray.800', 'gray.100')}
                _hover={{ border: '2px solid #1C6FEB' }}
                leftIcon={<MdPhone color={useColorModeValue('gray.800', 'gray.100')}
                  size="20px" />}>
                +63917-1234567
              </Button>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color={useColorModeValue('gray.800', 'gray.100')}
                _hover={{ border: '2px solid #1C6FEB' }}
                leftIcon={<MdEmail color={useColorModeValue('gray.800', 'gray.100')}
                  size="20px" />}>
                magconsultants@gmail.com
              </Button>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color={useColorModeValue('gray.800', 'gray.100')}
                _hover={{ border: '2px solid #1C6FEB' }}
                leftIcon={<MdLocationOn color={useColorModeValue('gray.800', 'gray.100')}
                  size="20px" />}>
                Philippines
              </Button>
            </VStack>
          </Box>
          <Flex
            direction={'row'}
            mt={{ lg: 10, md: 10 }}
            gap={5}
            // px={5}
            justify={'center'}
            align={'center'}>
            <IconButton
              aria-label="facebook"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF' }}
              icon={<SiFacebook size="28px" />}
            />
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF' }}
              icon={<SiGithub size="28px" />}
            />
            <IconButton
              aria-label="discord"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF' }}
              icon={<SiDiscord size="28px" />}
            />
          </Flex>
        </Box>
        {/* <Box> */}
        {/* <Flex p={{ base: 0 }}
            direction={{ base: 'row' }}
            wrap={'wrap'}
            justify={'center'}
            align={'center'}
            gap={{ base: 8, sm: 12 }}
            width={"100%"}
          > */}
        <Box bg="white" borderRadius="lg" maxW={'320px'}>
          <Box m={8} color="#0B0E3F">
            <VStack spacing={5}>
              <FormControl isInvalid={isError}>
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input type="text" size="md"
                             value={input} onChange={handleInputChange}
                            />
                </InputGroup>
                {!isError ? (
                            <FormHelperText>
                            Please enter your Name
                            </FormHelperText>
                            ) : 
                            <FormErrorMessage>Name is required.</FormErrorMessage>
                            }
              </FormControl >
              <FormControl isInvalid={isErrorEmail}>
                <FormLabel>E-Mail</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<HiOutlineMail color="gray.800" />}
                  />
                  <Input type="email" size="md"
                    value={email} onChange={handleEmailChange}
                  />
                </InputGroup>
                {!isErrorEmail ? (
                            <FormHelperText>
                            Please enter your E-mail
                            </FormHelperText>
                            ) : 
                            <FormErrorMessage>E-mail is required.</FormErrorMessage>
                            }
              </FormControl>
              <FormControl id="name">
                <FormLabel>Message</FormLabel>
                <Textarea
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: 'gray.300',
                  }}
                  placeholder="message" resize="none"
                />
              </FormControl>
              <FormControl id="name" float="right">
                <Button
                  variant="solid"
                  bg="#0D74FF"
                  color="white"
                  _hover={{}}>
                  Send Message
                </Button>
              </FormControl>
            </VStack>
          </Box>
          {/* </Box> */}
          {/* </Flex> */}
        </Box>
      </Flex>
    </Container>
    // </Flex>
  )
}


