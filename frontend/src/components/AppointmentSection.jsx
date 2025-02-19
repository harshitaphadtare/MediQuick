import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentSection = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{ backgroundColor: "#587DFF" }}
      className="text-white py-16 px-4 flex justify-center"
    >
      <div className="max-w-2xl text-center">
        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
          | Book Appointment
        </p>
        <h2 className="text-3xl font-bold mt-2 leading-tight">
          Make An Appointment And <br /> Solve Your Problem
        </h2>
        <p className="text-gray-200 text-base mt-4 mx-auto">
          Book your consultation with top medical experts. Get the right
          diagnosis and treatment for your needs, all from the comfort of your
          home.
        </p>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="mt-10 text-sm text-blue-500 bg-white hover:scale-110 transition duration-200 py-3 px-6 rounded-lg font-semibold"
        >
          Create Account
        </button>
      </div>
    </section>
  );
};

export default AppointmentSection;
