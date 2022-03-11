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
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <Grid minH="calc(100vh - 64px)" p={0}>
          <VStack spacing={8}>
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/About" element={<About />}></Route>
                <Route exact path="/Contact" element={<Contact />}></Route>
                <Route exact path="/Services" element={<Services />}></Route>
                <Route exact path="/Testimonials" element={<Testimonials />}></Route>
              </Routes>
            </Router>
          </VStack>
        </Grid>
      <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
