import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p>My Appointment</p>
      <div>{doctors.slice(0, 2).map((item, index) => {})}</div>
    </div>
  );
};

export default MyAppointment;
