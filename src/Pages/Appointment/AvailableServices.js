import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const AvailableServices = ({ service, setBooking, openModal }) => {
  return (
    <div className="card w-[425px] bg-base-100 drop-shadow-lg mx-auto">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{service.name}</h2>
        {service.slots.length ? (
          <div>
            <p className="font-semibold">{service.slots[0]}</p>
            <p className="uppercase">{service.slots.length} Spaces Available</p>
          </div>
        ) : (
          <div>
            <p className="text-red-500 uppercase font-semibold">
              Try Another Day
            </p>
            <p className="uppercase">No Slot Available</p>
          </div>
        )}

        <div className="card-actions">
          <PrimaryButton
            disabled={service.slots.length === 0}
            onClick={() => {
              setBooking(service);
              openModal(openModal);
            }}
          >
            Book Appointment
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AvailableServices;
