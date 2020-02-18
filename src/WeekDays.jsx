import React from 'react';
import Moment from 'moment';

const WeekDays = ({ elem }) => {
  
  return (
    <div className="header__week-block_days">
      <div className="header__week-block_part-bord"></div>
      <p className="header__week-block_dayname">{elem}</p>
      <p className="header__week-block_daydate"></p>
    </div>
  );
};
export default WeekDays;