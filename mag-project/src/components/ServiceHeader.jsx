import React from 'react'
import{Box, Flex, Icon, chakra, 
    useColorModeValue, Stack} from '@chakra-ui/react';
import {AiFillCloud} from 'react-icons/ai';
import {BiMoney} from 'react-icons/bi';  
import {FaBuilding} from 'react-icons/fa';  
import {MdWork} from 'react-icons/md';

    export default function ServiceHeader(){
      const Feature = (props) => {
        return (
          <Flex>
            <Flex shrink={0}>
              <Flex
                alignItems="center"
                justifyContent="center"
                h={12}
                w={12}
                rounded="md"
                bg={useColorModeValue("brand.500")}
                color="white"
              >
                <Icon
                  boxSize={6}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {props.icon}
                </Icon>
              </Flex>
            </Flex>
            <Box ml={4}>
              <chakra.dt
                fontSize="lg"
                fontWeight="medium"
                lineHeight="6"
                color={useColorModeValue("gray.900")}
              >
                {props.title}
              </chakra.dt>
              <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
                {props.children}
              </chakra.dd>
            </Box>
          </Flex>
        );
      };
      return (
        <Flex
          bg={useColorModeValue("#F9FAFB", "gray.600")}
          p={20}
          flexDirection = "row"
          justifyContent="center"
          alignItems="center"
        >
          <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
            <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
              <Box textAlign={{ lg: "center" }}>
                <chakra.p
                  mt={2}
                  fontSize={{ base: "3xl", sm: "4xl" }}
                  lineHeight="8"
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  color={useColorModeValue("gray.900")}
                >
                  A Great Way to Start your Career Journey
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
    
              <Box mt={10}>
                <Stack
                  spacing={{ base: 10, md: 0 }}
                  display={{ md: "grid" }}
                  gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                  gridColumnGap={{ md: 8 }}
                  gridRowGap={{ md: 10 }}
                >
                  
                  <Feature
                    title="Secure your Dream Job"
                    icon={
                      <AiFillCloud color={useColorModeValue("blue", "white")}/>
                    }
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </Feature>
    
                  <Feature
                    title=" Analyze Salaries"
                    icon={
                      <BiMoney 
                        color={useColorModeValue("blue", "white")}/>
                    }
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </Feature>
    
                  <Feature
                    title="Research Companies"
                    icon={ 
                      <FaBuilding 
                        color={useColorModeValue("blue", "white")}/>
                    }
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </Feature>
    
                  <Feature
                    title="Apply for Jobs"
                    icon={
                      <MdWork
                      color={useColorModeValue("blue", "white")}/> 
                    }
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </Feature>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Flex>
      );
    }

  