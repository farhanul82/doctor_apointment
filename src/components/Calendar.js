import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCalendarData } from "../redux/action";
import CalendarDays from "./CalendarDays";
import Header from "./Header";
import { CalendarDaysContainer, Container } from "./styles/Styles";

const Calendar = () => {
  const [calendarData, setCalendarData] = useState({});
  const dispatch = useDispatch();

  // get calendar from store
  const data = useSelector((state) => state.CalendarData.calendar);

  // Trigger dispatch function for calendar data
  useEffect(() => {
    dispatch(getCalendarData());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setCalendarData(data);
    }
  }, [data]);

  return (
    <Container>
      <Header />
      {calendarData ? (
        <CalendarDaysContainer>
          {calendarData?.month?.days?.map((item) => (
            <>
              <CalendarDays day={item.days + 1} key= {item.days} />
            </>
          ))}
        </CalendarDaysContainer>
      ) : (
        <h1>Loading</h1>
      )}
    </Container>
  );
};

export default Calendar;
