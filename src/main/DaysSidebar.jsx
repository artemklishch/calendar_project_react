import React from 'react';
import EventObject from './EventObject';


const DaysSidebar = ({arrDaysOfWeek, dayNumber, arrayForRender, onShowFormOnEditing}) => {
  let placeForEventObject = false; 
  return Array(24)
    .fill(null)
    .map((elem, indexElem) => {
      elem = indexElem;
      return elem;
    })
    .map((hourPeriod, index) =>
      <div 
        key={hourPeriod}
        className="main__sidebar_days_hours"
        data-hour-number={index}
      >
        {
          arrayForRender.map(objectElem => { 
            arrDaysOfWeek.forEach(day => {
              if(objectElem.startDate.getDay() === dayNumber
                && objectElem.startDate.getDate() === day.getDate()
                && objectElem.startDate.getMonth() === day.getMonth()
                && objectElem.startDate.getFullYear() === day.getFullYear()
                && objectElem.startDate.getHours() === index){
                  placeForEventObject = true;
              }
            });
            if(placeForEventObject){
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
      </div>);
};
export default DaysSidebar;