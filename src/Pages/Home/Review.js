import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="card-actions justify-start items-center gap-6 mt-4">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="avatar" />
            </div>
          </div>
          <div>
              <h3 className="font-bold">{review.name}</h3>
              <h4>{review.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
