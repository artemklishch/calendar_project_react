import React from 'react';
import { forHeightTopAndParagraph } from './funcForRenderEvents';

const EventObject = ({ objectElem }) => {
  const { top, height, padding, timeString } = forHeightTopAndParagraph(objectElem);
  return (
    <div className='main__sidebar_day_object' style={{ top: top, height: height, padding: padding }} >
      <h4>{objectElem.header}</h4>
      <p>{timeString}</p>
    </div>
  );
};
export default EventObject;