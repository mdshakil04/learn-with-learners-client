import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import user from "../../../../assets/images/logos/comment_1.png"

const Feedback = () => {
  return (
    <section className=" my-4">
      <SectionTitle heading={"Our Students Feedback"}></SectionTitle>
      <div
        className="carousel w-full hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/dpPFBHk/4102879-971.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          id="slide1"
          className="hero-content  text-neutral-content carousel-item relative w-full"
        >
          <div className="max-w-md">
            <img className=" w-24" src={user} alt="" />
            <p className="mb-5">
              "Overall I really like this class because all lectures, assignments, and tests are straight forward. A couple things I dislike about the class are that there should be more opportunities for extra credit and it would be awesome if the final was an objective essay about what we have learned in this class or what we like about the class. I believe that I have more knowledge about ocean, weather, and marine lives and hopefully, I can use them in real life."
            </p>
            <h1 className="mb-5 text-5xl font-bold">Zahid Hasan</h1>
            <h2 className="text-2xl">MEARN Stack Web Development</h2>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------- */}
    </section>
  );
};

export default Feedback;
