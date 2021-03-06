import React from 'react';
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    Link
  } from "@chakra-ui/react"; 
  
const ServiceSection1 = (props) => {

          return (
           
            <Flex
            bg={useColorModeValue('gray.50', "gray.800")}
            alignItems="center"
            justifyContent="center"
          >
            <Box 
              w="xs"
              h="420px"
              bg={useColorModeValue("white", "gray.800")}
              shadow="lg"
              rounded="md"
              overflow="hidden"
              mx="auto"
            >
              <Image
                w="full"
                h={56}
                fit="cover"
                src={props.image}
                alt="avatar"
              />
        
              <Box p={5} textAlign="center">
                <Link
                  display="block"
                  fontSize="2xl"
                  color={useColorModeValue("gray.800", "white")}
                  fontWeight="bold"
                >
                  {props.title}
                </Link>
                <chakra.span
                  fontSize="md"
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  {props.text}
                </chakra.span><br/>
                <chakra.span
                  fontSize="md"
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  {props.content}
                </chakra.span>
              </Box>
            </Box>
          </Flex>
    )
}   
      
export default ServiceSection1