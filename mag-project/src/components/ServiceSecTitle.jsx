import React from 'react';
import { Box, chakra, useColorModeValue, Flex } from "@chakra-ui/react";

const ServiceSecTitle = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      mt={12}
    >
      <Box w="full" mx="auto" px={{ base: 4, lg: 8 }}>
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
            mx={ "auto" }
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Feel free to browse below the available Tech Jobs that suits your
            potential career.
          </chakra.p>
        </Box>
      </Box>

    </Flex>

  )
}

export default ServiceSecTitle