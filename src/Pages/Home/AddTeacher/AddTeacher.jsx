import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AddTeacher = () => {
  return (
    <div className="">
      <SectionTitle heading={"Become a  Teacher"}></SectionTitle>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <img
            src="https://i.ibb.co/t30KkSb/jonas-kakaroto-KIPqvv-TOC1s-unsplash.jpg"
            className=" w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Become an instructor</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline btn-accent">Start Teaching today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
