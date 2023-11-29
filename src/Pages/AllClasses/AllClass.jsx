import React from "react";

const AllClass = ({ allClass }) => {
  const { title, name, image, price, short_description, total_enrollment } =
    allClass;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
            className=" lg:h-[350px] w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">
          Instructor : {title}
        </h2>
        <h2 className="card-title">
          Instructor : {name}
        </h2>
        <p>{short_description}</p>
        <h2>Price: ${price}</h2>
        <div className="card-actions justify-start">
          <div className="badge badge-outline border-2 border-green-500">Total Enrolment: {total_enrollment}</div>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-outline btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllClass;
