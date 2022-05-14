import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AvailableServices from "./AvailableServices";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([])
  useEffect(() =>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  return (
    <section className="px-8 my-16">
      <p className="text-secondary text-xl text-center font-bold my-16">
        Available Appointments on {format(date, "PP")}{" "}
      </p>
      <div className="flex flex-wrap gap-6">
        {services.map(service=> <AvailableServices
        key={service._id}
        service={service}/>)}
      </div>
    </section>
  );
};

export default AvailableAppointments;
