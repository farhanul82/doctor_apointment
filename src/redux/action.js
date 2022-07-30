import { FILTER_BY_YEAR, FILTER_BY_MONTH, GET_CALENDAR, CREATE_APPOINTMENT } from "./type";

// action function for filter  year
export const filterByYear = (year) => ({
  type: FILTER_BY_YEAR,
  payload: year,
});

// action function for filter month
export const filterByMonth = (month) => ({
  type: FILTER_BY_MONTH,
  payload: month,
});

// action function to get calendar data
export const getCalendarData = () => ({
  type: GET_CALENDAR,
});

// action function to create Appointment
export const createAppointment = (data) => ({
  type: CREATE_APPOINTMENT,
  payload: data,
});
