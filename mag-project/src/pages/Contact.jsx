import React from 'react'
import './Contact3.css'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
const Contact = () => {
  return (
    <div className='wrapper'><br></br>
        <header>Contact Our Team</header>
        
        <form action="#">
            <div className="dbl_field">
                <div className="field">
                    <input type="text" placeholder='Enter your name'/>
                    <input type="email" placeholder='Enter your email'/><i class="bi bi-person"></i>
                    <input type="number" placeholder='Enter your phone'/><i class="bi bi-person"></i>
                    <input type="text" placeholder='Write A Message...'/><i class="bi bi-person"></i>
                </div>
                <button type="submit">Send Message</button>
            </div>
        </form>
        <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  )
}

export default Contact