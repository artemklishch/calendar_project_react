import React from 'react';
import NavigationElems from './NavigationElems';
import WeekBlock from './WeekBlock';

const HeaderElems = ({arrDaysOfWeek, dateTitle, onArrowBtns, onClickTodayWeek, onCreateButton}) => {
    return (
      <header className="header">
        <NavigationElems
          onArrowBtns={onArrowBtns}
          onClickTodayWeek={onClickTodayWeek}
          dateTitle={dateTitle}
          onCreateButton={onCreateButton}
        />
        <WeekBlock arrDaysOfWeek={arrDaysOfWeek} />
      </header>
    );

};
export default HeaderElems;