import React from "react";
import { assets } from "../assets/assets";

const WhyUs = () => {
  return (
    <section className="bg-gray-50 flex mb-10 flex-col-reverse md:flex-row justify-center items-center px-6 py-15 md:px-12 lg:px-20">
      {/* Image on Top (for mobile) */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={assets.docP}
          alt="Doctor with patients"
          className="w-full max-w-xs md:max-w-md rounded-lg shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 sm:text-left md:text-left md:ml-10">
        <p className="text-blue-500 uppercase text-sm font-semibold">
          | Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-medium mt-2">
          Why Most People <br /> Like And{" "}
          <span className="text-blue-500">Choose</span> Us
        </h2>
        <div className="mt-8 space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 ">
              <img src={assets.tick} alt="tick" />
            </span>
            <div className="text-left">
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600 text-sm w-[90%] md:w-[70%]">
                Experience best dedicated customer support anytime you need
                help.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <span className="w-7 h-7">
              <img src={assets.tick} alt="tick" />
            </span>
            <div className="text-left">
              <h3 className="text-xl font-semibold">Book Appointment</h3>
              <p className="text-gray-600 text-sm w-[90%] md:w-[70%]">
                Schedule appointments easily with our hassle-free system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
