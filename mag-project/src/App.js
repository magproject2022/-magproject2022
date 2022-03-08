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
import Sample from './components/Sample';
import SampleNav from './components/SampleNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';

import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <SampleNav />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route exact path="/Services" element={<Services />}></Route>
            <Route exact path="/Testimonials" element={<Testimonials />}></Route>
          </Routes>
        </Router>
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}></VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
