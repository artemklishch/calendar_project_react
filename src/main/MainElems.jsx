import React from 'react';
import TimeSidebar from './TimeSidebar';
import DaysSidebar from './DaysSidebar';
import './main.scss';

const MainElems = ({arrDaysOfWeek, onShowForm, arrayForRender, onShowFormOnEditing}) => {
  const arrayOfDays = Array(7).fill(null);
  let dayNumber = 0;
  return (
    <main className="main">
      <div className="main__sidebar_timing">
        <TimeSidebar />
      </div>
      <div className="main__sidebar_days" onClick={onShowForm}>
        {
          arrayOfDays.map((element, index) =>
            <div key={dayNumber++} className="main__sidebar_days_line" data-day-number={index}>
              <DaysSidebar 
                arrDaysOfWeek={arrDaysOfWeek}
                dayNumber={index}
                arrayForRender={arrayForRender}
                onShowFormOnEditing={onShowFormOnEditing}
              />
            </div>)
        }
      </div>
    </main>
  );
};
export default MainElems;