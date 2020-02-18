import React from 'react';
import TimeSidebar from './TimeSidebar';
import DaysSidebar from './DaysSidebar';

const MainElems = () => {
  const arrayOfDays = Array(7).fill(null);
  let dayNumber = 0;
  return (
    <main className="main">
      <div className="main__sidebar_timing">
        <TimeSidebar />
      </div>
      <div className="main__sidebar_days">
        {
          arrayOfDays.map((element, index) =>
            <div key={dayNumber++} className="main__sidebar_days_line" data-day-number={index}>
              <DaysSidebar />
            </div>)
        }
      </div>
    </main>
  );
};
export default MainElems;