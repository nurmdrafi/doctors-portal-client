import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AvailableServices from "./AvailableServices";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AvailableAppointments = ({ date }) => {
  const [user, loading] = useAuthState(auth);
  const [services, setServices] = useState([]);
  const [booking, setBooking] = useState(null);
  const [isReload, setIsReload] = useState(false);

  console.log(format(date, "PP"));
  console.log(booking);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // GET available Services
  useEffect(() => {
    fetch(`https://doctors-portal-30072022.herokuapp.com/available?date=${format(date, "PP")}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [date, isReload]);

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

  // handleAppointment Form
  const handleAppointment = async (data) => {
    const appointment = {
      treatmentId: data._id,
      treatment: booking.name,
      date: format(date, "PP"),
      slot: data.slot,
      patientName: data.name,
      patientEmail: data.email,
      patientPhone: data.number,
    };
    await fetch("https://doctors-portal-30072022.herokuapp.com/appointment", {
      method: "POST",
      body: JSON.stringify(appointment),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Show Notification
        if (data.success) {
          console.log(
            `Appointment is set on ${appointment.date} at ${appointment.slot}`
          );
        } else {
          console.log(
            `Already you have an appointment on ${data.appointment.date} at ${data.appointment.slot}`
          );
        }
        setBooking(null);
        setIsReload(!isReload);
      });

    reset();
    closeModal();
  };

  if (loading) {
    return <Loading />;
  }
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
          onSubmit={handleSubmit(handleAppointment)}
        >
          {/* Date Input */}
          <input
            type="text"
            className="input min-w-[350px]"
            defaultValue={format(date, "PP")}
            readOnly
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

          {/* Name Input*/}
          <input
            {...register("name")}
            type="text"
            className="input min-w-[350px]"
            placeholder="Full Name"
            value={user?.displayName}
            readOnly
          />

          {/* Email Input */}
          <input
            {...register("email")}
            type="email"
            className="input min-w-[350px]"
            placeholder="Email"
            value={user?.email}
            readOnly
          />

          {/* Number Input */}
          <input
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
          {/* Submit Button */}
          <input type="submit" defaultValue="SUBMIT" className="btn" />
        </form>
      </Modal>
    </section>
  );
};

export default AvailableAppointments;
