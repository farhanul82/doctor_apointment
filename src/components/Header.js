import React, { useState } from "react";
import { HeadersContainer, Select, ModalButton } from "./styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { filterByYear, getCalendarData, filterByMonth } from "../redux/action";
import CreateAppointmentModal from "./modals/CreateAppointmentModal";
import { useNavigate, useParams } from "react-router-dom";
import { months } from "../data";

const Header = () => {
  const param = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // get month from store
  const getMonth = useSelector((store) => store?.CalendarData.monthForFilter);

  // get year from store
  const getYearFromStore = useSelector((store) => store?.CalendarData.yearForFilter);

  // function for modal open
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <HeadersContainer>
      <Select
        name="years"
        id="years"
        onChange={(year) => {
          dispatch(filterByYear(parseInt(year.target.value)));
          dispatch(getCalendarData());
          navigate(`/year/${year.target.value}/month/${getMonth}`);
        }}
      >
        <option value="2021">2021</option>
        <option value="2022" selected>
          2022
        </option>
        <option value="2023">2023</option>
      </Select>

      <Select
        name="months"
        id="months"
        onChange={(month) => {
          dispatch(filterByMonth(month.target.value));
          dispatch(getCalendarData());
          navigate(`/year/${getYearFromStore}/month/${month.target.value}`);
        }}
      >
        {months.map((item) => (
          <option value={item.name} selected={item.name === param.showMonth}>
            {item.name}
          </option>
        ))}
      </Select>

      <ModalButton onClick={openModal}>Create Appointment </ModalButton>

      {/* Create Appointment details modal  */}
      <CreateAppointmentModal showModal={showModal} setShowModal={setShowModal} />
    </HeadersContainer>
  );
};

export default Header;
