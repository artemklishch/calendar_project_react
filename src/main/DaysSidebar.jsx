import React from 'react';
import EventObject from './EventObject';
import RedLine from '../redLine/RedLine';
import moment from 'moment';


const DaysSidebar = ({
  arrDaysOfWeek,
  dayNumber,
  arrayForRender,
  onShowFormOnEditing,
  positionOfRedLine }) => {
    
  let placeForEventObject = false;

  return Array(24)
    .fill(null)
    .map((elem, indexElem) => {
      elem = indexElem;
      return elem;
    })
    .map((hourPeriod, index) => {
      const currentDate = new Date();
      const currentDay = arrDaysOfWeek.find(day => day.getDate() === currentDate.getDate());
      return <div
        key={hourPeriod}
        className="main__sidebar_days_hours"
        data-hour-number={index}
      >
        {
          arrayForRender.map(objectElem => {
            arrDaysOfWeek.forEach(day => {
              if (objectElem.startDate.getDay() === dayNumber
                && moment(objectElem.startDate).format('l') === moment(day).format('l')
                && objectElem.startDate.getHours() === index) {
                placeForEventObject = true;
              }
            });
            if (placeForEventObject) {
              placeForEventObject = false;
              return <EventObject
                key={objectElem.id}
                objectElem={objectElem}
                onShowFormOnEditing={onShowFormOnEditing}
              />;
            }
            return null;
          })
        }
        {
          currentDate.getDay() === dayNumber
            && currentDate.getHours() === index
            && currentDay
            && <RedLine key={Math.random()} positionOfRedLine={positionOfRedLine} />
        }
      </div>
    });
};
export default DaysSidebar;