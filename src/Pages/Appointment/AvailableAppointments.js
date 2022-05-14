import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AvailableServices from "./AvailableServices";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [booking, setBooking] = useState(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Booking Modal

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setBooking(null);
  }

  // React Hook Form
  const handleBooking = (data) => {
    console.log("handleBooking", data);
    closeModal();
    setBooking(null);
  };

  return (
    <section className="px-8 my-16">
      <p className="text-secondary text-xl text-center font-bold my-16">
        Available Appointments on {format(date, "PP")}
      </p>
      <div className="flex flex-wrap gap-6">
        {services.map((service) => (
          <AvailableServices
            key={service._id}
            service={service}
            setBooking={setBooking}
            openModal={openModal}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Booking Modal"
      >
        <div className="my-6">
          <span className="font-bold">{booking?.name}</span>
          <button
            className="btn btn-sm btn-circle absolute right-5 top-8"
            onClick={closeModal}
          >
            X
          </button>
        </div>

        {/* Booking Form */}

        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleBooking)}
        >
          <input
            name="date"
            {...register("date", { required: true })}
            type="text"
            className="input min-w-[350px]"
            value={format(date, "PP")}
          />
          <select
            name="slot"
            {...register("slot", { required: true })}
            className={`select select-borderedmin-w-[350px] ${
              errors.slot && "border-red-500"
            }`}
          >
            {booking?.slots.map((slot, idx) => (
              <option key={idx} defaultValue={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.slot && <p className="text-red-500">Slot is required</p>}
          <input
            name="name"
            {...register("name", { required: true })}
            type="text"
            className={`input min-w-[350px] ${errors.name && "border-red-500"}`}
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-red-500 flex-grow-0">Name is required</p>
          )}
          <input
            name="number"
            {...register("number", { required: true })}
            type="number"
            className={`input min-w-[350px] ${
              errors.number && "border-red-500"
            }`}
            placeholder="Phone Number"
          />
          {errors.number && (
            <p className="text-red-500 flex-grow-0">Number is required</p>
          )}
          <input
            name="email"
            {...register("email", { required: true })}
            type="email"
            className={`input min-w-[350px] ${
              errors.email && "border-red-500"
            }`}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 flex-grow-0">Email is required</p>
          )}
          <input type="submit" defaultValue="SUBMIT" className="btn" />
        </form>
      </Modal>
    </section>
  );
};

export default AvailableAppointments;
