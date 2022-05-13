import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  const infos = [
    {
      _id: 1,
      img: clock,
      cardTitle: "Opening Hours",
      details: "10:00 PM",
      bgClass:
        "bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:from-[#0FCFEC] hover:to-[#19D3AE]",
    },
    {
      _id: 2,
      img: marker,
      cardTitle: "Visit our location",
      details: "Brooklyn, NY 10036, United States",
      bgClass: "bg-accent",
    },
    {
      _id: 3,
      img: phone,
      cardTitle: "Contact us now",
      details: "+00 123456789",
      bgClass:
        "bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:from-[#0FCFEC] hover:to-[#19D3AE]",
    },
  ];

  return (
    <section className="grid grid-rows-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-5">
      {infos.map((info) => (
        <InfoCard key={info._id} info={info} />
      ))}
    </section>
  );
};

export default Info;
