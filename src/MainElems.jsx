import React from 'react';
import TimeSidebar from './TimeSidebar';
import DaysSidebar from './DaysSidebar';

const MainElems = () => {
  const arrayOfDays = Array(7).fill(null);
  let dayNumber = 0;
  return (
    <main className="main">
      <div className="main__sidebar_timing"><TimeSidebar /></div>
      <div className="main__sidebar_days">
        {arrayOfDays.map(() => <DaysSidebar key={dayNumber++} />)}
      </div>
    </main>
  )
};
export default MainElems;