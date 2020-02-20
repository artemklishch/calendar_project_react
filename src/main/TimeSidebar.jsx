import React from 'react';

const TimeSidebar = () => {
  const arrOfTimePoints = Array(25)
    .fill(null)
    .map((elem, index) => {
      if(index !== 0 && index !== 24){
        elem = `${index}:00`;
      } 
      return elem;
    });
  return (
    arrOfTimePoints.map(timePoint =>
      <div key={Math.random().toFixed(5)} className="main__sidebar_timing_place">
        <span className="main__sidebar_time">{timePoint}</span>
        <div className="main__sidebar_timing_place-bord"></div>
      </div>)
  );
};
export default TimeSidebar;