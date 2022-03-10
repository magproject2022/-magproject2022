import React from 'react'
import {Box, Image, Badge, Text, Stack, Icon, useColorMode, Button} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Card = () => {
    const colorMode = useColorMode();
    const bgColor = {light:"gray.200", dark:"gray.700"};
    const textColor = {light:"gray.500", dark:"gray.100"};
  return (
    <Box w='400px' rounded='20px' overflow='hidden' 
     BoxShadow='sm' backgroundColor={bgColor[colorMode]}>
        <Image src ='./thumb.png' alt="Chakra Logo"></Image>
        <Box p='5'></Box>
        <Stack isInline align='baseline'>
            <Badge variant ='solid' variantColor='teal' 
              rounded ='full' px='2'>NEW!</Badge>
            <Badge variant ='solid' variantColor='Pink 800' 
              rounded ='full' px='2'>React</Badge>
              <Text transForm='uppercase'>2 Hours &bull; 12 Lectures</Text>
        </Stack>
        <Text as='h2' fontWeight='semibold' fontSize='xl'>Introduction to Chakra UI</Text>
        <Text fontWeight='light' fontSize ='md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio praesentium, officia quia doloremque labore 
            maiores necessitatibus suscipit earum, quam, sapiente itaque deleniti corporis. Adipisci ipsa hic amet. Reprehenderit, 
            nulla maiores!</Text>
        <Stack isInline justify='space-between' color={textColor[colorMode]}>    
        <Text fontWeight='semibold' fontSize='lg'>
            20$
        </Text>
            <Box display="flex">
            <Box as='span'>
            {Array(4).fill('').map((_, i) => (
                 <StarIcon color='teal.500'/>   
             ))}
            <StarIcon mr='2'/>
            </Box>
            </Box>
            <Text as='h3' fontSize='lg' fontWeight='semibold'>
                34 reviews
                </Text>
        </Stack>
        <Box textAlign="Center">
        <Button variantColor='teal' size='lg' mt='3' BoxShadow='sm' _hover={{BoxShadow:'md'}} _active={{BoxShadow:'lg'}} >Sign Up</Button> 
        </Box>      
    </Box> 
    
    )
}

export default Card