import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Will Smith",
      img: people1,
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Emma Watson",
      img: people2,
      location: "Texas",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Tylor Swift",
      img: people3,
      location: "Florida",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="container mx-auto px-28">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="uppercase text-secondary font-bold text-lg my-2">
            Appointment
          </h4>
          <h3 className=" text-3xl">What Our Patients Says</h3>
        </div>
        <div>
          <img src={quote} alt="quote" className="w-24 lg:w-48" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 my-16">
        {reviews.map((review) => (
          <Review key={review._id} review={review} 
          className=""/>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
