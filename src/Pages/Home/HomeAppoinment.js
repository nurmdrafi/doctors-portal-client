import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointmentBg from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const HomeAppoinment = () => {
  return (
    <section
      className="card lg:card-side bg-base-100 my-36 md:px-16 lg:px-32 rounded-none overflow-visible"
      style={{
        maxHeight: "533px",
        background: `url(${appointmentBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center left",
      }}
    >
      <figure className=" xl:w-1/2 ">
        <img src={doctor} alt="doctor" className="hidden xl:block z-10 -mt-20"/>
      </figure>
      <div className="card-body w-full lg:w-1/2 flex justify-center">
        <h3 className="uppercase text-secondary font-bold text-lg">
          Appointment
        </h3>
        <h2 className="card-title text-4xl font-extrabold text-white">
          Make an appointment Today
        </h2>
        <p className="text-white flex-grow-0">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions justify-start">
        <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default HomeAppoinment;
