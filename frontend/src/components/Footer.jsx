import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Medicare Info */}
        <div>
          <img src={assets.logo} alt="" />
          <p className="text-sm mt-2">
            Providing quality healthcare services with a team of expert doctors
            and medical professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Doctors
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold text-white">Services</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                General physician
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Gynecologist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Dermatologist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Pediatricians
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Neurologist
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold text-white">Information</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex">
              <img className="w-5 mr-2" src={assets.phone} alt="" /> +123 123
              1232
            </li>
            <li className="flex">
              <img className="w-5 mr-2" src={assets.email} alt="" />{" "}
              harshita.codewiz@gmail.com
            </li>
            <li className="flex">
              <img className="w-5 mr-2" src={assets.location} alt="" />{" "}
              9423-Mumbai, India
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 MediQuick. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
