import React, { PureComponent } from 'react';
import WeekDays from './WeekDays';
import NavigationElems from './NavigationElems';
import moment from 'moment';


class HeaderElems extends PureComponent {
  state = {
    arrDaysOfWeek: [],
    counter: 0
  };

  componentDidMount() {
    this.generateCurrentWeek();
    this.renderTitleDate(this.state.arrDaysOfWeek[0], this.state.arrDaysOfWeek[6]);
  }

  componentDidUpdate(){
    this.renderTitleDate(this.state.arrDaysOfWeek[0], this.state.arrDaysOfWeek[6]);
  }

  generateCurrentWeek = () => {
    const firstDayOfWeek = new Date();
    while (firstDayOfWeek.getDay() !== 0) {
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 1);
    }
    const arrDaysOfWeek = Array(7).fill(null)
      .map(elem => {
        elem = new Date(firstDayOfWeek);
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
        return elem;
      });
    this.setState({
      arrDaysOfWeek,
      counter: 0,
      dateTitle: ''
    });
  };

  generateAnotherWeek = event => {
    const checkArrow = event.target.classList.contains('nav__arow_left') ||
      event.target.classList.contains('nav__arow_right');
    if (!checkArrow) return;

    const arr = this.state.arrDaysOfWeek.map(date =>
      event.target.classList.contains('nav__arow_right')
        ? new Date(date.setDate(date.getDate() + 7))
        : new Date(date.setDate(date.getDate() - 7)));

    this.setState({
      arrDaysOfWeek: arr,
      counter: event.target.classList.contains('nav__arow_right')
        ? this.state.counter + 1 : this.state.counter - 1
    });
  };

  renderTitleDate = (firstDayOfWeek, lastDayOfWeek) => {
    const firstDayMonth = moment(firstDayOfWeek).format('MMM');
    const firstDayYear = moment(firstDayOfWeek).format('YYYY');

    const lastDayMonth = moment(lastDayOfWeek).format('MMM');
    const lastDayYear = moment(lastDayOfWeek).format('YYYY');

    const dateTitle = firstDayMonth === lastDayMonth && firstDayYear === lastDayYear
      ? `${firstDayMonth} ${firstDayYear}`
      : firstDayMonth !== lastDayMonth && firstDayYear === lastDayYear
        ? `${firstDayMonth} - ${lastDayMonth.toLocaleLowerCase()} ${firstDayYear}`
        : firstDayMonth !== lastDayMonth && firstDayYear !== lastDayYear
          ? `${firstDayMonth} ${firstDayYear} - ${lastDayMonth} ${lastDayYear}`
          : '';

    this.setState({ dateTitle });
  };

  render() {
    return (
      <header className="header">
        <NavigationElems
          onClickAnotherWeek={this.generateAnotherWeek}
          onClickTodayWeek={this.generateCurrentWeek}
          dateTitle={this.state.dateTitle}
        />
        <div className="header__week-block">
          <div className="header__week-block_gmt-cell">
            gmt+02
            <div className="header__week-block_gmt-cell_part-bord"></div>
          </div>

          <div className="header__week-block_line">
            {
              this.state.arrDaysOfWeek.map(dateObject => <WeekDays
                key={dateObject}
                dayDate={dateObject}
              />)
            }
          </div>
        </div>
      </header>
    );
  }
};
export default HeaderElems;