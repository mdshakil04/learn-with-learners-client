import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const ClassDetails = () => {
  const classes = useLoaderData();
  const { title, _id, image, price, name, short_description } = classes;
  return (
    <div className=" py-24 container mx-auto">
      <SectionTitle heading={"Class Details"}></SectionTitle>
      <div>
        <div className="card lg:card-side bg-base-100 flex flex-row gap-12 shadow-xl">
          <figure className="w-1/2">
            <img
              src={image}
              alt="Album"
            />
          </figure>
          <div className=" flex flex-col justify-center w-1/2">
            <h2 className="card-title text-3xl mb-2">Course Title: {title}</h2>
            <h2 className="card-title font-bold text-2xl mb-2">Teacher: {name}</h2>
            <p className="mb-2 font-bold">Description: {short_description}</p>
            <p className="mb-2 font-bold">Price: $<span className=" text-red-700">{price}</span></p>
            <div className="card-actions mt-2">
              <button className="btn btn-outline btn-primary">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
