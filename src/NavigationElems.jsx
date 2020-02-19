import React from 'react';

const NavigationElems = ({ onArrowBtns, dateTitle, onClickTodayWeek, onCreateButton }) => {
  return (
    <nav className="nav">
      <button className="nav__button" onClick={onCreateButton}>
        <img src="https://img.icons8.com/color/48/000000/plus-math.png" className="plus" alt="Plus img" />
        Create
        </button>
      <button className="nav_day" onClick={onClickTodayWeek}>Today</button>
      <div className="nav__arow" onClick={onArrowBtns}>
        <div className="nav__arow_left"></div>
        <div className="nav__arow_right"></div>
      </div>
      <div className="nav__dateMonEar">
        <h2 className="nav__dateMonEar-today">{dateTitle}</h2>
      </div>
    </nav>
  );
};
export default NavigationElems;