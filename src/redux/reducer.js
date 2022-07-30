import { years, months } from "../data";
import { uniqueId } from "../uniqueId";
import { FILTER_BY_YEAR, FILTER_BY_MONTH, GET_CALENDAR, CREATE_APPOINTMENT } from "./type";

const getCurrentMonth = () => {
  const serial = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const currentMonthNo = new Date().getMonth();
  return serial[`0${currentMonthNo + 1}`];
};

export const CalendarData = (
  state = {
    calendar: {},
    yearForFilter: 2022,
    monthForFilter: getCurrentMonth(),
    appointments: [],
  },
  action
) => {
  switch (action.type) {
    case GET_CALENDAR:
      const filterCalendarByYear = years.find((item) => item === state?.yearForFilter);

      const getMonth = months.find((month) => month.name === state?.monthForFilter);

      const data = {
        year: filterCalendarByYear,
        month: getMonth,
      };
      return {
        ...state,
        calendar: data,
      };

    case FILTER_BY_YEAR:
      return {
        ...state,
        yearForFilter: action.payload,
      };

    case FILTER_BY_MONTH:
      return {
        ...state,
        monthForFilter: action.payload,
      };

    case CREATE_APPOINTMENT:
      const obj = { ...action.payload, id: uniqueId() };
      return {
        ...state,
        appointments: [...state?.appointments, obj],
      };

    default:
      return state;
  }
};
