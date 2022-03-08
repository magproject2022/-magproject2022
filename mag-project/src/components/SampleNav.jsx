import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

const SampleNav = () => {
  return (
    <>
      <Breadcrumb separator='>' fontSize='lg'>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

export default SampleNav