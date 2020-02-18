import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

const WeekDays = ({ dayDate }) => {
  const className = 
  const day = moment(dayDate).format('ddd');
  const date = moment(dayDate).format("D");
  return (
    <div className="header__week-block_days">
      <div className="header__week-block_part-bord"></div>
      <p className="header__week-block_dayname">{day}</p>
      <p className="header__week-block_daydate">{date}</p>
    </div>
  );
};
export default WeekDays;