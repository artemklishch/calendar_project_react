import React from 'react';

const DaysSidebar = () => {
  return Array(24)
    .fill(null)
    .map((elem, index) => {
      elem = index;
      return elem;
    })
    .map((hourPeriod, index) =>
      <div 
        key={hourPeriod}
        className="main__sidebar_days_hours"
        data-hour-number={index}
      >
      </div>);
};
export default DaysSidebar;