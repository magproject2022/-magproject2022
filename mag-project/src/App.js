import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Sample from './components/Sample'
import SampleNav from './components/SampleNav';
import Navbar from './components/Navbar'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <SampleNav />
        <Grid minH="100vh" p={3}>
          
          <VStack spacing={8}>
            
            
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
