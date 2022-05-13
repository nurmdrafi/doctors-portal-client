import React from "react";
import treatment from "../../assets/images/treatment.png"
import PrimaryButton from "../Shared/PrimaryButton";
const ServiceDetails = () => {
  return (
    <section className="card lg:card-side bg-base-100 my-36 md:px-16 lg:px-32">
      <figure className="w-full lg:w-1/2">
        <img className="rounded-lg" style={{maxWidth: "458px", maxHeight: "576px"}}
          src={treatment}
          alt={treatment}
        />
      </figure>
      <div className="card-body w-full flex justify-center">
        <h2 className="card-title text-4xl font-extrabold">Exceptional Dental Care, on Your Terms</h2>
        <p className="flex-grow-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <div className="card-actions justify-start">
        <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
