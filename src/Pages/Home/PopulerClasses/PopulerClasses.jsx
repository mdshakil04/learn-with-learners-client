/* eslint-disable no-unused-vars */
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const PopulerClasses = () => {
  const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
          origin: "center",
          perView: 2,
          spacing: 15,
        },
  });
  return (
    <div>
        <h2 className="text-4xl text-center mb-8">Our Popular Classes</h2>
      <div ref={sliderRef} className="keen-slider container mx-auto">
            <div className="keen-slider__slide number-slide1">
                <img
                    className=" "
                    src="https://i.ibb.co/Pcsx5DN/close-up-sound-engineer-studio-with-equipment.jpg" alt=""/>
                <h2 className="text-4xl text-center font-bold text-white -mt-16">Dev-Ops</h2>
            </div>
            <div className="keen-slider__slide number-slide2">
                <img 
                className=" lg:h-[510px]"
                src="https://i.ibb.co/hmcXzPD/world-collapse-doomsday-scene-digital-painting.jpg" alt="" />
                <h2 className="text-4xl text-center font-bold text-white -mt-16">VFX</h2>
            </div>
            <div className="keen-slider__slide number-slide3">
                <img
                className=""
                src="https://i.ibb.co/Y0QQQ4z/corporate-management-strategy-solution-branding-concept.jpg" alt="" />
                <h2 className="text-4xl text-center font-bold text-white -mt-16">Croudfunding</h2>
            </div>
            <div className="keen-slider__slide number-slide4">
                <img
                className=" lg:h-[510px]"
                src="https://i.ibb.co/8x4HtCV/3d-rendering-website-hosting-concept.jpg" alt="" />
                <h2 className="text-4xl text-center font-bold text-white -mt-16">Digital Marketing</h2>
            </div>
            <div className="keen-slider__slide number-slide5">
                <img
                className=""
                src="https://i.ibb.co/j4ZPVy3/programming-background-collage.jpg" alt="" />
                <h2 className="text-4xl text-center font-bold text-white -mt-16">Web Development</h2>
            </div>
            <div className="keen-slider__slide number-slide6">
                <img
                className=" lg:h-[510px]"
                src="https://i.ibb.co/dpPFBHk/4102879-971.jpg" alt="" />
                <h2 className="text-4xl text-center font-bold text-white -mt-16">App Development</h2>
            </div>
      </div>
    </div>
  );
};

export default PopulerClasses;
