import React from 'react'
import { useColorModeValue } from '@chakra-ui/react';
import ServiceHeader from '../components/ServiceHeader';
import ServiceSection1 from '../components/ServiceSection1';
import ServiceList from '../components/ServiceList';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import ServiceSecTitle from '../components/ServiceSecTitle';

const Services = () => {

  const SectionComponents = ServiceList.map(details => <ServiceSection1 id={details.id}
    image={details.image} title={details.title} text={details.text} content={details.content} />);


  return (
    <Flex direction={'column'} width={'100vw'}>
      <ServiceHeader />
      <Flex 
        direction={'column'} 
        gap={8}
        bg={useColorModeValue('gray.200', 'gray.700')}
      >
        <ServiceSecTitle />
        <Flex 
          p={{ base: 0, md: 8}}
          direction={{ base: 'row'}} 
          wrap={'wrap'}
          justify={'center'}
          align={'center'}
          gap={{ base: 8, sm: 12}}
        >
          {SectionComponents}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Services