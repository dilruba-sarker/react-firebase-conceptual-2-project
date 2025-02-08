import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../serviceCard/serviceCard';
export default function AllTreatments() {
  const services=useLoaderData()
  
  return (
<div className='grid grid-cols-4 gap-8'>
    {services.map(service=><ServiceCard key={service.id} service={service} ></ServiceCard>)}
  </div>
  )
}
