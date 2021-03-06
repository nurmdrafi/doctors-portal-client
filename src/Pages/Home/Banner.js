import React from "react";
import Chair from "../../assets/images/chair.png";
import BannerImg from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  const BannerBackground = {
    background: `url(${BannerImg})`,
    minHeight: "90vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left",
    boxShadow: "25px 25px 50px 0 #F6F7F9 inset, -25px -25px 50px 0 #F6F7F9 inset"
  };
  return (
    <section className="hero min-h-screen max-w-full" style={BannerBackground}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chair}
          className="max-w-xl w-3/4 rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
