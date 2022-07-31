import React, { useState } from "react";

import { useSelector } from "react-redux";
import { monthsSerial } from "../data";
import AppointmentDetailsModal from "./modals/AppointmentDetailsModal";
import {
  CalenderDiv,
  ViewDate,
  AppointmentContainer,
  AppointmentsModalButton,
} from "./styles/Styles";

const CalendarDays = ({ day }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  // get appointments from store
  const appointments = useSelector((store) => store?.CalendarData.appointments);

  // get month from store
  const getMonth = useSelector((store) => store?.CalendarData.monthForFilter);

  // get year from store
  const getYearFromStore = useSelector((store) => store?.CalendarData.yearForFilter);

  // appointment function for specific year and month
  const Appointments = () => {
    if (appointments) {
      // sort data with time and filter for specific year and month

      const data = appointments
        .sort(({ time: a }, { time: b }) => (a > b ? 1 : a < b ? -1 : 0))
        .filter(
          (item) =>
            parseInt(item.date.split("-")[0]) === getYearFromStore &&
            item.date.split("-")[1] === monthsSerial[getMonth] &&
            parseInt(item.date.split("-")[2]) === day
        );
 
      return data;
    }

    return "";
  };



  // function for modal open
  const openModal = (item) => {
    setShowModal((prev) => !prev);
    setModalData(item);
  };

  return (
    <CalenderDiv>
      <ViewDate>
        <span> {day}</span>
      </ViewDate>

      <AppointmentContainer>
        {Appointments() ? (
          <>
            {Appointments()?.map((item, index) => (
              <AppointmentsModalButton onClick={() => openModal(item)} key = {item?.id}>
                {" "}
                Appointment {index + 1} at {item.time}
              </AppointmentsModalButton>
            ))}
          </>
        ) : (
          ""
        )}
      </AppointmentContainer>

      {/*Appointment details modal  */}
      <AppointmentDetailsModal showModal={showModal} setShowModal={setShowModal} data={modalData} />
    </CalenderDiv>
  );
};

export default CalendarDays;
