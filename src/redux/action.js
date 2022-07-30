import {FILTER_BY_YEAR, FILTER_BY_MONTH, GET_CALENDAR, CREATE_APPOINTMENT } from "./type";

export const filterByYear = (year) => ({
  type: FILTER_BY_YEAR,
  payload:year,
});

export const filterByMonth = (month) => ({
  type: FILTER_BY_MONTH,
  payload:month,
});


export const getCalendarData = () => ({
  type: GET_CALENDAR,
});




export const createAppointment = (data) =>({
  type: CREATE_APPOINTMENT,
  payload: data
})
