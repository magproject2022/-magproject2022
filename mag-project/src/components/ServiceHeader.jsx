import React from 'react'
import{Box, Flex, Icon, chakra, 
    useColorModeValue, Stack} from '@chakra-ui/react';
import {AiFillCloud} from 'react-icons/ai';
import {BiMoney} from 'react-icons/bi';  
import {FaBuilding} from 'react-icons/fa';  
import {RiBroadcastFill} from 'react-icons/ri';

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
                  boxSize={20}
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
          <Box py={12} bg={useColorModeValue('gray.50', "gray.800")} rounded="xl">
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
                  To accomplish the career you want, you need to be strategic 
                  to your profession. That&apos;s where mapping out your career path
                  can be a significant help. Your career path is series of jobs you 
                  take that leads you to your dream profession. A career plan consists 
                  of short and long term goals that you endeavor for along with your
                  career path. 
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
                    Many individuals wants a job that is interesting, fulfilling and
                    well compensated. We will be with you to achieve this goals.
                  </Feature>
    
                  <Feature
                    title=" Analyze Salaries"
                    icon={
                      <BiMoney 
                        color={useColorModeValue("blue", "white")}/>
                    }
                  >
                    A compensation research is the procedure businesses use
                    to acknowledge how they are paying their employees.

                  </Feature>
    
                  <Feature
                    title="Research Companies"
                    icon={ 
                      <FaBuilding 
                        color={useColorModeValue("blue", "white")}/>
                    }
                  >
                    You can explore various companies that are tied up with us. We mean
                    big companies that are waiting and looking for you.
                  </Feature>
    
                  <Feature
                    title="Communication"
                    icon={
                      <RiBroadcastFill
                      color={useColorModeValue("blue", "white")}/> 
                    }
                  >
                    We utmost you as our priority. You are welcome to 
                    approach us any time.
                  </Feature>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Flex>
      );
    }

  