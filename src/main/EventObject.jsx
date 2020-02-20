import React from 'react';
import { forHeightTopAndParagraph } from '../funcs/funcForRenderEvents';

const EventObject = ({ objectElem, onShowFormOnEditing }) => {
  const { top, height, padding, timeString } = forHeightTopAndParagraph(objectElem);
  return (
    <div 
      className='main__sidebar_day_object'
      style={{ 
        top: top,
        height: height,
        padding: padding,
        backgroundColor: objectElem.backgroundColor }} 
      data-event-id={objectElem.id}
      onClick={onShowFormOnEditing}
    >
      <h4 className="main__sidebar_day_object_header">{objectElem.header}</h4>
      <p className="main__sidebar_day_object_time">{timeString}</p>
    </div>
  );
};
export default EventObject;