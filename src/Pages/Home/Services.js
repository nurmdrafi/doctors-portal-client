import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  const service1 = {
    img: fluoride,
    serviceTitle: "Fluoride Treatment"
  };
  const service2 = {
    img: cavity,
    serviceTitle: "Cavity Filling"
  };
  const service3 = {
    img: whitening,
    serviceTitle: "Teeth Whitening"
  };

  return (
    <section className="mt-32">
      <h2 className="uppercase text-center text-secondary font-bold text-lg">
        Our Services
      </h2>
      <h3 className="text-center text-3xl mb-16">Services We Provide</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 px-5">
        <ServiceCard service={service1} />
        <ServiceCard service={service2} />
        <ServiceCard service={service3} />
      </div>
      <ServiceDetails/>
    </section>
  );
};

export default Services;
