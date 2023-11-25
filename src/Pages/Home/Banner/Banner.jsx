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
      className="hero lg:h-[700px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/PGbpfbb/4590755-2352648.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content lg:-ml-[1080px] text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">Develop a passion for learning</h1>
          <p className="mb-5 text-2xl font-bold">
          “Learning is not attained by chance, it must be sought for with ardour and diligence.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
