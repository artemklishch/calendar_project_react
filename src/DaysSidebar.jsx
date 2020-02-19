import React from 'react';
import { array } from './storage';
import EventObject from './EventObject';
import { forChangingEventsArray } from './funcForRenderEvents';

const arrayForRender = forChangingEventsArray(array);
let jsxObjectOfEvent = false; 

const DaysSidebar = ({arrDaysOfWeek, dayNumber}) => {
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
                  jsxObjectOfEvent = true;
              }
            });
            if(jsxObjectOfEvent){
              jsxObjectOfEvent = false;
              return <EventObject key={objectElem.id} objectElem={objectElem} />;
            }
            return null;  
          })
        }
      </div>);
};
export default DaysSidebar;