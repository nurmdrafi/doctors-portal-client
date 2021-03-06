import React from "react";
import Banner from "./Banner";
import HomeAppoinment from "./HomeAppoinment";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";


const Home = () => {
  return (
    <div>
      <Banner/>
      <Info/>
      <Services/>
      <HomeAppoinment/>
      <Testimonials/>
    </div>
  );
};
export default Home;
