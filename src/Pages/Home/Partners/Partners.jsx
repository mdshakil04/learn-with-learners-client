/* eslint-disable no-unused-vars */
import React from "react";
import bkash from "../../../assets/images/Partners/bkash.svg";
import paypal from "../../../assets/images/Partners/paypal-3.svg";
import zoom from "../../../assets/images/Partners/zoom-app.svg";
import google from "../../../assets/images/Partners/google-meet-icon-2020-.svg";
import adobe from "../../../assets/images/Partners/adobe-photoshop-2.svg";
import linkedin from "../../../assets/images/Partners/linkedin-icon-2.svg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Partners = () => {
  return (
    <div className=" mx-auto container my-4">
      <SectionTitle
        heading={"Our Official Partners"}
      ></SectionTitle>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-8 rounded-xl shadow-2xl">
        <div className="card card-side ">
          <figure className=" w-1/2 p-4">
            <img
              src={bkash}
              alt="Partner"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title text-4xl">Bkash</h2>
            <p>bKash is a mobile financial Partner in Bangladesh operating under the authority of BRAC Bank PLC.</p>
          </div>
        </div>
        <div className="card card-side ">
          <figure className=" w-1/2 p-4">
            <img
              src={paypal}
              alt="Partner"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title text-4xl">Paypal</h2>
            <p>PayPal is the faster, safer way to send and receive money or make an online payment.</p>
          </div>
        </div>
        <div className="card card-side ">
          <figure className=" w-1/2 p-4">
            <img
              src={google}
              alt="Partner"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title text-4xl">Google Meet</h2>
            <p>Google Meet is a high-quality video calling app designed to help you have meaningful and fun interactions</p>
          </div>
        </div>
        <div className="card card-side ">
          <figure className=" w-1/2 p-4">
            <img
              src={linkedin}
              alt="Partner"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title text-4xl">Linkedin</h2>
            <p>LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps..</p>
          </div>
        </div>
        <div className="card card-side ">
          <figure className=" w-1/2 p-4">
            <img
              src={adobe}
              alt="Partner"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title text-4xl">Adobe</h2>
            <p>Adobe is changing the world through digital experiences. We help our customers create.</p>
          </div>
        </div>
        <div className="card card-side ">
          <figure className=" w-1/2 p-4">
            <img
              src={zoom}
              alt="Partner"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title text-4xl">Zoom</h2>
            <p>Modern video calls with live messaging and content sharing for desktop and mobile. Record meetings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
