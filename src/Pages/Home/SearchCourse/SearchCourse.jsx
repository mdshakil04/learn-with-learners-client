import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const SearchCourse = () => {
  return (
    <div className=" my-8">
      <SectionTitle heading={"Search Your Course"}></SectionTitle>
      <div className=" w-full lg:flex">
        <div className=" bg-[#2B2A4C] lg:w-1/2 text-white text-center justify-center items-center md:p-24 md:py-24">
          <h2 className="md:text-4xl font-bold">
            Register now and get a discount
            <br /> <span className=" text-yellow-400">50%</span> discount until
            1 January
          </h2>
          <p className=" font-bold font-sans py-4">
            {" "}
            Whether you're looking to start a career in web development or
            enhance your existing skills, Web Development 101 provides the
            knowledge and practical experience needed to succeed. Join our
            community of learners and embark on a rewarding journey into the
            dynamic field of web development!Remember, this is entirely
            fictional, and any resemblance to real courses or institutions is
            coincidental. If you have specific preferences or details you'd like
            to include, feel free to let me know!
          </p>
          <button className=" btn btn-outline btn-success">Register Now</button>
        </div>
        <div className="card py-4 shrink-0 lg:w-1/2 shadow-2xl bg-base-100" 
            style={{backgroundImage: 'url(https://i.ibb.co/8x4HtCV/3d-rendering-website-hosting-concept.jpg)'}}
        >
            <h2 className="text-4xl text-center text-green-600">Search Your Course</h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Course Name</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Course Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Category</span>
              </label>
              <input
                type="email"
                placeholder="Category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Instructor</span>
              </label>
              <input
                type="email"
                placeholder="Instructor"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-success text-xl">Search Your Course</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchCourse;
