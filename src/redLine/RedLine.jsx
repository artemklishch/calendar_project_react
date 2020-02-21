import React from 'react';
import './redLine.scss';

const RedLine = ({positionOfRedLine}) => {
  return (
    <div className="redline" style={{ top: positionOfRedLine }}>
      <div className="redline__ball"></div>
      <div className="redline__line"></div>
    </div>
  );
};
export default RedLine;