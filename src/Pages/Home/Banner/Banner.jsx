/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/images/Banner/Banner (1).jpg";
import img2 from "../../../assets/images/Banner/Banner (2).jpg";
import img3 from "../../../assets/images/Banner/Banner (3).jpg";
const Banner = () => {
  return (
    <div
      className="hero lg:h-[950px] "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/K2JwLJC/2150706489.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-20 lg:pb-24"></div>
      <div className="hero-content text-center ">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">Develop a passion for learning</h1>
          <p className="mb-12 text-2xl text-white font-bold">
          “Learning is not attained by chance, it must be sought for with ardour and diligence.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
