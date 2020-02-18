import React, { PureComponent } from 'react' ;
import WeekDays from './WeekDays';
import NavigationElems from './NavigationElems';


class HeaderElems extends PureComponent {
  state = {
    arrDaysOfWeek: []
  };

  componentDidMount(){
    this.generateArrDaysOfWeek();
  }

  generateArrDaysOfWeek = () => {
    const currentFullDate = new Date();//full day
    const currentDate = currentFullDate.getDate();//date
    const currentDayOfWeek = currentFullDate.getDay();//day num

    let countToDown = 0;
    let countToUp = 0;
    Array(7).fill(null)
        .forEach((element,index) => {
            if(index < currentDayOfWeek){
                countToDown++;
            }else if(index > currentDayOfWeek){
                countToUp++;
            }
            // if(currentDayOfWeek === index){
            //     let tempElem = element.closest('.header__week-block_days');
            //     tempElem.classList.add('today__header__week-block_days');
            // }
        });
    
    countToDown = countToDown * 24 * 60 * 60 * 1000;
    countToUp = countToUp * 24 * 60 * 60 * 1000; 
    let milliSeconds = 0;
     const arrDaysOfWeek = Array(7).fill(null)
      .map(elem => {
        elem = new Date(Date.now() - countToDown + milliSeconds);
        milliSeconds += 86400000;
        return elem;
      });
    this.setState({
      arrDaysOfWeek,
    });
};

  render(){
    // const weekDays = [
    //   "Sun", "Mon", "Tue", "Wen", "Th", "Fr", "Sat"
    // ];
    return (
      <header className="header">
        <NavigationElems />
        <div className="header__week-block">
          <div className="header__week-block_gmt-cell">
            gmt+02
            <div className="header__week-block_gmt-cell_part-bord"></div>
          </div>
  
          <div className="header__week-block_line">
           {this.state.arrDaysOfWeek.map(elem => <WeekDays 
              key={elem}
              elem={elem}
            />)
            }
          </div>
        </div>
      </header>
    );
  }
};
export default HeaderElems;