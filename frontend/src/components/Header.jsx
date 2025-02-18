import React from "react";
import { assets } from "../assets/assets";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        {/* Left Content */}
        <div className="left-content">
          <div className="badge">
            <span>NEW</span>
            <p>Seamless and hassle-free Appointments</p>
          </div>

          <h1 className="heading">Professional Care For Your Family</h1>
          <div className="subtext-container">
            <img
              src={assets.group_profiles}
              alt="Group of Patients"
              className="group-img"
            />
            <p className="subtext">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <a href="#speciality">
            <button className="chronicle-button">
              <span>
                <em>Book Appointment</em>
              </span>
              <span>
                <em>Book Appointment</em>
              </span>
            </button>
          </a>
        </div>

        {/* Right Content - Hidden on Mobile, Visible on Tablet & Desktop */}
        <div className="right-content">
          {/* Background Shape */}
          <div className="bg-shape-light"></div>
          <div className="bg-shape"></div>
          {/* Doctor Image */}
          <img
            src={assets.appointment_img}
            alt="Doctor"
            className="doctor-img"
          />

          {/* Right Badge */}
          <div className="right-badge">
            <img src={assets.trust} alt="Logo" />
            <h3>Trusted by Thousands</h3>
            <p>
              Join our community of satisfied patients. Experience seamless
              healthcare with our trusted doctors.
            </p>
          </div>
          <div className="down-badge">
            <img src={assets.choose} alt="Logo" />
            <h3>Why Choose Us?</h3>
            <p>
              Our team of experienced doctors ensure the best care for you and
              your family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
