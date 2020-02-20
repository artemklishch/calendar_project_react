import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

const WeekDays = ({ dayDate }) => {
  const day = moment(dayDate).format('ddd');
  const date = moment(dayDate).format("D");
  const dateClass = classNames('header__week-block_days', 
    {'today__header__week-block_days': 
      dayDate.getDate() === new Date().getDate()
      && dayDate.getMonth() === new Date().getMonth()
      && dayDate.getFullYear() === new Date().getFullYear()
    });
  return (
    <div className={dateClass}>
      <div className="header__week-block_part-bord"></div>
      <p className="header__week-block_dayname">{day}</p>
      <p className="header__week-block_daydate">{date}</p>
    </div>
  );
};
export default WeekDays;