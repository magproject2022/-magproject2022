import  React  from 'react';
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
    WrapItem,
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
  import {HiOutlineMail} from "react-icons/hi";
  import { SiFacebook, SiGithub, SiDiscord } from "react-icons/si";
  import "./Contact3.css";

  export default function ContactSection() {

//     const [input, setInput] = useState('')

//     const handleInputChange = (e) => setInput(e.target.value)
  
//     const isError = input === ''

    return (
        <Flex direction={'column'} width={'100vw'}
        justify={'center'} align={'center'}
        >
      <Container bg={useColorModeValue("gray.200", "gray.800")} 
           maxW="full" mt={4} centerContent overflow="hidden"
           >
        <Flex wrap={'wrap'} justify={'center'}
          align={'center'}
        >
          <Box
            bg={useColorModeValue("#9DC4FB", "teal.600")}
            color={useColorModeValue('gray.800', 'gray.100')}
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                    <Flex p={{ base: 0, md: 8}}
                      direction={{ base: 'row'}} 
                      wrap={'wrap'}
                      justify={'center'}
                      align={'center'}
                      gap={{ base: 8, sm: 12}}
                      width={"80vw"}
                    >
                  <Box>
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
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
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
                    </HStack>
                  </Box>
                </Flex>
                </WrapItem>
                <WrapItem>
                <Flex p={{ base: 0, md: 8}}
                      direction={{ base: 'row'}} 
                      wrap={'wrap'}
                      justify={'center'}
                      align={'center'}
                      gap={{ base: 8, sm: 12}}
                      width={"80vw"}
                    > 
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        {/* <FormControl isInvalid={isError}> */}
                          <FormControl id = "name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800"/>}
                            />
                            {/* <Input type="text" size="md"
                             value={input} onChange={handleInputChange}
                            /> */}
                            <Input type="text" size="md" value="Alexander Poe"/>
                          </InputGroup>
                          {/* {!isError ? (
                            <FormHelperText>
                            Please enter your Name
                            </FormHelperText>
                            ) : 
                            <FormErrorMessage>Name is required.</FormErrorMessage>
                            } */}
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>E-Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<HiOutlineMail color="gray.800" />}
                            />
                            <Input type="email" size="md" 
                              value="alexpoe@gmail.com"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message" value="I would like to
                              inquire about your service"
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
                  </Box>
                  </Flex>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>  
    </Flex>
    )
}
  

