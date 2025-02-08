import React from 'react';
import Banner from '../Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../serviceCard/serviceCard';

export default function Home() {
  const { serviceData } = useLoaderData(); // Destructure the serviceData from loader's returned object

   // Check if serviceData is properly loaded

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-4 gap-8">
        {serviceData.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <button className="bg-blue-800 text-white block mx-auto p-3 rounded-xl" type="button">
        <Link to="/treatment">Show More</Link>
      </button>
    </div>
  );
}
