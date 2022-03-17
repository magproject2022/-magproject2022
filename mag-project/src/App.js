import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Developers from './pages/Developers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './Scrollbar.css'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <Grid minH="calc(100vh - 654px)" p={0}>
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/Services" element={<Services />} />
                <Route exact path="/Testimonials" element={<Testimonials />} />
                <Route exact path="/Developers" element={<Developers />} />
              </Routes>
            </Router>
        </Grid>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
