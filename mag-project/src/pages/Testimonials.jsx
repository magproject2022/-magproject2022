import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  Flex,
  Button,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import TestimonyCard from '../components/TestimonyCard';
import './Testimonials.css'

export default function Testimonials() {
  const localStore =
    localStorage.getItem("Testimonies") ?
      JSON.parse(localStorage.getItem("Testimonies")) :
      [
        {
          id: Date.now(),
          name: 'Bill Gates',
          title: 'Founder, Microsoft',
          heading: 'Amazing Work!',
          text: 'We have been working with MAG Consultants for a number of years now, and it has been great to watch the company grow into a dynamic and highly successful enterprise that it is today.'
        },
        {
          id: Date.now(),
          name: 'Mark Zuckerberg',
          title: 'CEO, Meta',
          heading: 'My Dreams Came True',
          text: '"I could not recommend MAG Consultants more highly. They helped me in being selected for my dream job and I will always be grateful them for the support they gave me throughout the recruitment process"'
        },
        {
          id: Date.now(),
          name: 'Elon Musk',
          title: 'CEO, Tesla',
          heading: 'Service is awesome!',
          text: 'I am writing this to say a big thank you for helping me and guiding to grab the permanent opportunity, everyone here is so warm and friendly. I am really enjoying my role here and I have been very much pleased with the experience and services provided by MAG Consultants. Lastly, I want to wish you guys all the best.'
        },
        {
          id: Date.now(),
          name: 'Larry Page',
          title: 'Founder, Google',
          heading: 'Very Professional',
          text: 'Always a pleasure to work with MAG Consultants – speedy and professional communication and the same level of service and candidate experience we would want for our own direct candidates.'
        }
      ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const [id, setId] = useState(Date.now());
  const [testimonies, setTestimonies] = useState(localStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      id: id,
      name: nameRef.current.value,
      title: titleRef.current.value,
      heading: headingRef.current.value,
      text: textRef.current.value
    }

    setTestimonies([...testimonies, entry]);
    setId(Date.now());
    nameRef.current.value = null;
    titleRef.current.value = null;
    headingRef.current.value = null;
    textRef.current.value = null;
  }

  useEffect(() => {
    localStorage.setItem("Testimonies", JSON.stringify(testimonies, null, 2));
  }, [testimonies])

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
          {
            testimonies.map(entry => {
              return (
                <TestimonyCard
                  key={entry.id}
                  name={entry.name}
                  title={entry.title}
                  heading={entry.heading}
                  text={entry.text}
                />
              )
            })
          }

          {/* Final Bubble for CTA Button */}
          <Flex direction={'column'} align={'center'} >
            <Flex
              direction={'column'}
              justify={'space-between'}
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
              <Heading as={'h3'} fontSize={'xl'} fontStyle={'italic'}>
                Got something to say about us?
              </Heading>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.600', 'gray.400')}
                fontSize={'sm'}
                overflow={'overlay'}
              >
                Click the button below to share your thoughts.
              </Text>
              <Button onClick={onOpen}>
                Add Testimony
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent height={'500px'}>
                  <ModalHeader>Add Testimony</ModalHeader>
                  <ModalCloseButton />
                  <form onSubmit={handleSubmit}>
                    <ModalBody>
                      <FormControl >
                        <Box>
                          <FormLabel>Name</FormLabel>
                          <Input ref={nameRef} bg={useColorModeValue("gray.100", "gray.800")}/>
                        </Box>
                        <Box mt={2}>
                          <FormLabel>Position</FormLabel>
                          <Input ref={titleRef} bg={useColorModeValue("gray.100", "gray.800")}/>
                        </Box>
                        <Box mt={2}>
                          <FormLabel>Heading</FormLabel>
                          <Input ref={headingRef} bg={useColorModeValue("gray.100", "gray.800")}/>
                        </Box>
                        <Box mt={2}>
                          <FormLabel>Your Testimony</FormLabel>
                          <Textarea ref={textRef} bg={useColorModeValue("gray.100", "gray.800")} />
                        </Box>
                      </FormControl>
                    </ModalBody>
  
                    <ModalFooter bg={'transparent'} overflow={'hidden'}>
                      <Button variant='ghost'  mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant='solid' colorScheme='blue' type={'submit'} onClick={onClose}>
                        Submit
                      </Button>
                    </ModalFooter>
                  </form>
                </ModalContent>
              </Modal>
            </Flex>
            <Flex align={'center'} mt={8} direction={'column'}>
              <Avatar mb={2} />
              <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600} color={'gray.500'} _hover={{color: 'white'}}>
                  Your name here
                </Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')} _hover={{color: 'white'}}>
                  -
                </Text>
              </Stack>
            </Flex>
          </Flex>

        </Stack>
      </Container>
    </Box>
  );
}