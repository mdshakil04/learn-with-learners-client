import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const OurInfo = () => {
  return (
    <div>
      <SectionTitle heading={"Info"}></SectionTitle>
      <div className="hero w-full  ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <img
            src="https://i.ibb.co/s98QZCS/40172.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="  w-1/2 flex flex-col gap-8">
            <h1 className=" bg-[#E6FFFD] text-5xl font-bold shadow-xl border-4 py-12 px-4 rounded-xl">Total<br/> User: 5230</h1>
            <h1 className="bg-[#E6FFFD] text-5xl font-bold shadow-xl border-4 py-12 px-4 rounded-xl">Total Classes:230</h1>
            <h1 className="bg-[#E6FFFD] text-5xl font-bold shadow-xl border-4 py-12 px-4 rounded-xl">Total<br/> Enroll: 10230</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;
