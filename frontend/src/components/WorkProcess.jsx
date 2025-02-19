import React from "react";
import { assets } from "../assets/assets";

const WorkProcess = () => {
  return (
    <section className="text-gray-800 mb-10 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          | Work Process
        </p>
        <h2 className="text-3xl font-medium mt-2">How does it work </h2>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-12 md:gap-8 relative">
          {/* Step 1 */}
          <div className="flex bg-gray-50 py-10 rounded-lg flex-col items-center w-full md:w-1/3 relative group">
            <div className="bg-white p-4 rounded-full shadow-lg transform group-hover:scale-110 transition duration-100">
              <img
                className="w-9 h-9"
                src={assets.appointment}
                alt="Appointment"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">Make appointment</h3>
            <p className="text-gray-600 text-sm mt-2 w-4/5 text-center">
              Simple and easy way to schedule your appointments online.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex bg-gray-50 py-10 rounded-lg flex-col items-center w-full md:w-1/3 relative group">
            <div className="bg-white p-4 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300">
              <img className="w-9 h-9" src={assets.doctor_img} alt="Doctor" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Choose Doctor</h3>
            <p className="text-gray-600 text-sm mt-2 w-4/5 text-center">
              Select the best specialist as per your requirements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex bg-gray-50 py-10 rounded-lg flex-col items-center w-full md:w-1/3 relative group">
            <div className="bg-white p-4 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300">
              <img className="w-10 h-10" src={assets.solution} alt="Solution" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Get a solution</h3>
            <p className="text-gray-600 text-sm mt-2 w-4/5 text-center">
              Receive expert medical advice and treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
