import React from "react";
import Header from "../components/Header";
import Speciality from "../components/Speciality";
import TopDoc from "../components/TopDoc";
import WhyUs from "../components/WhyUs";
import WorkProcess from "../components/WorkProcess";
import AppointmentSection from "../components/AppointmentSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Speciality />
      <TopDoc />
      <WhyUs />
      <WorkProcess />
      <AppointmentSection />
    </div>
  );
};

export default Home;
