import React from 'react';
import { forHeightTopAndParagraph } from '../funcs/funcForRenderEvents';

const EventObject = ({ objectElem, onShowFormOnEditing }) => {
  const { top, height, padding, timeString } = forHeightTopAndParagraph(objectElem);
  return (
    <div 
      className='main__sidebar_day_object eventObj'
      style={{ 
        top: top,
        height: height,
        padding: padding,
        backgroundColor: objectElem.backgroundColor }} 
      data-event-id={objectElem._id}
      onClick={onShowFormOnEditing}
    >
      <h4 className="eventObj" data-event-id={objectElem._id}>{objectElem.header}</h4>
      <p className="eventObj" data-event-id={objectElem._id}>{timeString}</p>
    </div>
  );
};
export default EventObject;