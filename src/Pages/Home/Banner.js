import React from "react";
import Chair from "../../assets/images/chair.png";
import BannerImg from "../../assets/images/bg.png";

const Banner = () => {
  const BannerBackground = {
    background: `url(${BannerImg})`,
    minHeight: "90vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left",
  };
  return (
    <div className="hero min-h-screen" style={BannerBackground}>
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
          <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:from-[#0FCFEC] hover:to-[#19D3AE]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
