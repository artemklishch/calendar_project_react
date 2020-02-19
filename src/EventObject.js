import React from 'react';

const EventObject = ({objectElem}) => {
  return (
    <div className='main__sidebar_day_object' style={{height: '150%'}} >
      <h4>{objectElem.header}</h4>
      <p></p>
    </div>
  );
};
export default EventObject;