import React from 'react';
import NavigationElems from './NavigationElems';
import WeekBlock from './WeekBlock';

const HeaderElems = ({arrDaysOfWeek, dateTitle, onClickTodayWeek, onClickAnotherWeek}) => {
    return (
      <header className="header">
        <NavigationElems
          onClickAnotherWeek={onClickAnotherWeek}
          onClickTodayWeek={onClickTodayWeek}
          dateTitle={dateTitle}
        />
        <WeekBlock arrDaysOfWeek={arrDaysOfWeek} />
      </header>
    );

};
export default HeaderElems;