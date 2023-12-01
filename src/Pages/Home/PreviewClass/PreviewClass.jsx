/* eslint-disable no-unused-vars */
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PreviewClass = () => {
  return (
    <div className=" flex flex-col items-center">
         <SectionTitle
            heading={'Latest Classes'}
        ></SectionTitle>
      <div className=" bg-[#2B2A4C] text-white">
        <div className="">
          <div className=" lg:flex gap-12">
            <div className=" lg:w-1/2 ">
              <iframe
                className=" w-full h-[240px] md:h-[400px] lg:h-[520px] rounded-xl"
                src="https://www.youtube.com/embed/YRzkxLmZH9g?si=DFBMNJ6TyzB3fCF5"
                title="YouTube video player"
                // eslint-disable-next-line react/no-unknown-property
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className=" lg:w-1/2 text-start lg:mt-24 p-12">
              <h1 className="text-5xl font-bold">
                 Watch Our Free Classes
              </h1>
              <p className="py-6">
              Whether you're looking to start a career in web development or enhance your existing skills, Web Development 101 provides the knowledge and practical experience needed to succeed. Join our community of learners and embark on a rewarding journey into the dynamic field of web development!Remember, this is entirely fictional, and any resemblance to real courses or institutions is coincidental. If you have specific preferences or details you'd like to include, feel free to let me know!
              </p>
              <button className="btn btn-outline btn-success font-bold">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewClass;
