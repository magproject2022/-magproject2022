import React from 'react';
import {Box, chakra, useColorModeValue} from "@chakra-ui/react";

const ServiceSecTitle = () => {
  return (
    <Box textAlign={{ lg: "center" }}>
                <chakra.p
                  mt={2}
                  fontSize={{ base: "3xl", sm: "4xl" }}
                  lineHeight="8"
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  color={useColorModeValue("gray.900")}
                >
                  Our Area of Specialization
                </chakra.p>
                <chakra.p
                  mt={4}
                  maxW="2xl"
                  fontSize="xl"
                  mx={{ lg: "auto" }}
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </chakra.p>
              </Box>
  )
}

export default ServiceSecTitle