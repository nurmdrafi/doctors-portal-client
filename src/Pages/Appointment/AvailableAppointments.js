import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AvailableServices from "./AvailableServices";
import Modal from "react-modal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    fetch("services.json")
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

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleBooking = (e) =>{
    e.preventDefault();
    console.log(e.target.name.value)

  }

  return (
    <section className="px-8 my-16">
      <p className="text-secondary text-xl text-center font-bold my-16">
        Available Appointments on {format(date, "PP")}{" "}
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
        <form className="flex flex-col gap-6" onSubmit={handleBooking}>
          <input
            name="date"
            type="text"
            className="input min-w-[350px] "
            value={format(date, "PP")}
            disabled
          />
          <select
            name="slot"
            className="select select-bordered w-full max-w-xs"
          >
            {booking?.slots.map((slot, idx) => (
              <option key={idx} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <input
            name="name"
            type="text"
            className="input min-w-[350px]"
            placeholder="Full Name"
            required
          />
          <input
            name="number"
            type="number"
            className="input min-w-[350px]"
            placeholder="Phone Number"
            required
          />
          <input
            name="email"
            type="email"
            className="input min-w-[350px]"
            placeholder="Email"
            required
          />
          <input type="submit" value="SUBMIT" className="btn" />
        </form>
      </Modal>
    </section>
  );
};

export default AvailableAppointments;
