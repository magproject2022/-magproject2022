import React from 'react'
import ServiceHeader from '../components/ServiceHeader';
import ServiceSection1 from '../components/ServiceSection1';
import ServiceList from '../components/ServiceList';
import { SimpleGrid } from '@chakra-ui/react';
import ServiceSecTitle from '../components/ServiceSecTitle';

const Services = () => {

  const SectionComponents = ServiceList.map(details => <ServiceSection1 id = {details.id} 
      image = {details.image} title = {details.title} content = {details.content}/>);
  

  return (
    <div>
      <ServiceHeader/>
      <ServiceSecTitle/>
      <SimpleGrid columns={3} minChildWidth="30%" gridTemplateColumns={{ md: "repeat(3,1fr)" }}>
      {SectionComponents}
      </SimpleGrid>
    </div>
  )
}

export default Services