import React from 'react';
import moment from 'moment';

const WeekDays = ({ elem }) => {
  const day = moment(elem).format('ddd');
  const date = moment(elem).format("D");
  return (
    <div className="header__week-block_days">
      <div className="header__week-block_part-bord"></div>
      <p className="header__week-block_dayname">{day}</p>
      <p className="header__week-block_daydate">{date}</p>
    </div>
  );
};
export default WeekDays;