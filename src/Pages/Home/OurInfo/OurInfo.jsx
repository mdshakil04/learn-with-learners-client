import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const OurInfo = () => {
  return (
    <div className=" mt-16">
      <SectionTitle heading={"Info"}></SectionTitle>
      <div className="hero w-full  ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img
            src="https://i.ibb.co/60hTyGD/9936543-4325315.jpg"
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div className="  w-1/2 flex flex-col gap-8">
            <h1 className=" bg-[#E6FFFD] text-5xl font-bold shadow-xl border-4 py-12 px-4 rounded-xl">Total<br/> User: 5230</h1>
            {/* <h1 className="bg-[#E6FFFD] text-5xl font-bold shadow-xl border-4 py-12 px-4 rounded-xl">Total Classes:230</h1> */}
            <h1 className="bg-[#E6FFFD] text-5xl font-bold shadow-xl border-4 py-12 px-4 rounded-xl">Total<br/> Enroll: 10230</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;
