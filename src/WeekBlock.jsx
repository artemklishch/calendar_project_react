import React from 'react';
import WeekDays from './WeekDays';

const WeekBlock = ({arrDaysOfWeek}) => {
  return (
    <div className="header__week-block">
      <div className="header__week-block_gmt-cell">
        gmt+02
            <div className="header__week-block_gmt-cell_part-bord"></div>
      </div>

      <div className="header__week-block_line">
        {
          arrDaysOfWeek.map(dateObject => <WeekDays
            key={dateObject}
            dayDate={dateObject}
          />)
        }
      </div>
    </div>
  );
};
export default WeekBlock;