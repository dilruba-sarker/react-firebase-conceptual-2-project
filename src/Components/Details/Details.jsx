import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal';

export default function Details() {
  const data = useLoaderData(); // Get service details from loader

  if (!data) return <h2 className="text-center text-red-500">Service Not Found</h2>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">{data.treatment}</h1>
      <img src={data.image} alt={data.treatment} className="w-full h-64 object-cover rounded-lg my-4" />
      <p className="text-gray-700">{data.description}</p>
      <p className="text-blue-500 font-semibold mt-2">Cost: {data.cost} Taka</p>
      <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Appointent</button>
      <Modal></Modal>
    </div>
  );
}
