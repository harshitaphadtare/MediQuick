import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="mx-3">
      <div className="pt-12 flex flex-col items-center justify-center">
        {/* Title */}
        <div className="text-2xl font-medium text-gray-500 text-center">
          <p className="flex">
            ABOUT <span className="pl-1 text-gray-700">US</span>
          </p>
        </div>

        {/* Content Section */}
        <div className="my-8 flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          {/* Image */}
          <img
            src={assets.about_image}
            alt="Doctors"
            className="w-full md:w-[360px] rounded-lg shadow-md"
          />

          {/* Text Content */}
          <div className="flex flex-col gap-4 text-sm text-gray-600 md:text-left">
            <p>
              Welcome to Mediquick, your trusted partner in managing your
              healthcare needs conveniently and efficiently. We understand the
              challenges individuals face when scheduling doctor appointments
              and managing their health records.
            </p>

            <p>
              Mediquick is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Mediquick is here to support you every step
              of the way.
            </p>

            <b className="text-gray-800">Our Vision</b>
            <p>
              Our vision at Mediquick is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto text-xl my-4 lg:mx-30">
        <p className="flex">
          WHY<span className="text-gray-700 font-semibold ml-1">CHOOSE US</span>
        </p>
      </div>

      <div className="lg:mx-30 flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
