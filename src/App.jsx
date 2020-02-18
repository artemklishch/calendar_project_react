import React from 'react';

const App = () => {
  return (
    <header className="header">
      <nav className="nav">
        <button className="nav__button">
          <img src="https://img.icons8.com/color/48/000000/plus-math.png" className="plus" alt="Plus img" />
          Create
        </button>
        <button className="nav_day">Today</button>
        <div className="nav__arow">
          <div className="nav__arow_left"></div>
          <div className="nav__arow_right"></div>
        </div>
        <div className="nav__dateMonEar">
          <h2 className="nav__dateMonEar-today"> Dec-2019 </h2>
        </div>
      </nav>

      <div className="header__week-block">
        <div className="header__week-block_gmt-cell">
          gmt+02
                    <div className="header__week-block_gmt-cell_part-bord"></div>
        </div>

        <div className="header__week-block_line">
          <div className="header__week-block_days">
            <div className="header__week-block_part-bord"></div>
            <p className="header__week-block_dayname">sun</p>
            <p className="header__week-block_daydate"></p>
          </div>
          <div className="header__week-block_days">
            <div className="header__week-block_part-bord"></div>
            <p className="header__week-block_dayname">mon</p>
            <p className="header__week-block_daydate"></p>
          </div>
          <div className="header__week-block_days">
            <div className="header__week-block_part-bord"></div>
            <p className="header__week-block_dayname">tue</p>
            <p className="header__week-block_daydate"></p>
          </div>
          <div className="header__week-block_days">
            <div className="header__week-block_part-bord"></div>
            <p className="header__week-block_dayname">wen</p>
            <p className="header__week-block_daydate"></p>
          </div>
          <div className="header__week-block_days">
            <div className="header__week-block_part-bord"></div>
            <p className="header__week-block_dayname">th</p>
            <p className="header__week-block_daydate"></p>
          </div>

          <div className="header__week-block_days">
            <div className="header__week-block_part-bord"></div>
            <p className="header__week-block_dayname">fr</p>
            <p className="header__week-block_daydate"></p>
          </div>
          <div className="header__week-block_days">
            <div className="header__week-block_part-bord"></div>
            <p className="header__week-block_dayname">sat</p>
            <p className="header__week-block_daydate"></p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default App;