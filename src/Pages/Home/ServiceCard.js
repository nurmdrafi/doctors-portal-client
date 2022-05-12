import React from "react";


const ServiceCard = (props) => {
  const { img, serviceTitle } = props.service;
  return (
    <div className="card bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={img} alt={img} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{serviceTitle}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae
          quia sapiente veniam libero consectetur?
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
