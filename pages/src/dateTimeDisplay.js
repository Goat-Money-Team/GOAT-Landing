import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p >{value}</p>
      <div>{type}</div>
    </div>
  );
};

export default DateTimeDisplay;