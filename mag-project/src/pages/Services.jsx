import React from 'react'
import ServiceHeader from '../components/ServiceHeader';
import ServiceSection1 from '../components/ServiceSection1';
import ServiceList from '../components/ServiceList';

const Services = () => {

  const SectionComponents = ServiceList.map(details => <ServiceSection1 id = {details.id} 
      image = {details.image} title = {details.title} content = {details.content}/>);
  

  return (
    <div>
      <ServiceHeader/>
      {SectionComponents}
    </div>
  )
}

export default Services