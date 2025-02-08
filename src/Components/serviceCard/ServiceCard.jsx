import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({service} ) => {
    const{id,treatment,cost,image,description}=service
    return (
        <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{treatment}!</h2>
    <h2 className="card-title">Cost: {cost}Taka</h2>

    <p>{description.slice(0,100)}</p>
    
      
  <NavLink to={`/details/${id}`}><button className="btn btn-primary">Check Out More</button> </NavLink>
  </div>
</div>
    );
};

export default ServiceCard;