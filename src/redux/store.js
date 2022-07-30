import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { CalendarData } from "./reducer";


const store = createStore(
  combineReducers({
    CalendarData: CalendarData
  }),
  composeWithDevTools()
);
export default store;
