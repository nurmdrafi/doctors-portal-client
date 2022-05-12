import React from "react";

const InfoCard = (props) => {
    const {img, cardTitle, details} = props.info;
    
  return (
    <div className={`card lg:card-side shadow-xl p-5 ${props.bgClass}`}>
      <figure className="lg:pl-5">
        <img
          src={img}
          alt={img}
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default InfoCard;
