import React from 'react';

const DaysSidebar = () => {
  const hourArray = Array(24)
    .fill(null)
    .map((elem, index) => {
      elem = index;
      return elem;
    });
  return (
    <div className="main__sidebar_days_line">
      {
        hourArray.map(hourPeriod =>
          <div key={hourPeriod} className="main__sidebar_days_hours"></div>)
      }
    </div>
  );
};
export default DaysSidebar;