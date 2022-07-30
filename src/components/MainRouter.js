import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Calendar from "./Calendar";

import { useSelector } from "react-redux";

const MainRouter = () => {
  // get month from store
  const getMonth = useSelector((store) => store?.CalendarData.monthForFilter);

  // get year from store
  const getYearFromStore = useSelector((store) => store?.CalendarData.yearForFilter);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={<Navigate to={`/year/${getYearFromStore}/month/${getMonth}`} />}
          />
          <Route path="/year/:showYear/:month/:showMonth" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
