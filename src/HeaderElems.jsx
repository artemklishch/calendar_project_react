import React from 'react';
import NavigationElems from './NavigationElems';
import WeekBlock from './WeekBlock';

const HeaderElems = ({arrDaysOfWeek, dateTitle, onArrowBtns, onClickTodayWeek}) => {
    return (
      <header className="header">
        <NavigationElems
          onArrowBtns={onArrowBtns}
          onClickTodayWeek={onClickTodayWeek}
          dateTitle={dateTitle}
        />
        <WeekBlock arrDaysOfWeek={arrDaysOfWeek} />
      </header>
    );

};
export default HeaderElems;