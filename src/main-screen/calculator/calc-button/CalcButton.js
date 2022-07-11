import React from 'react';
import './CalcButton.css';

function CalcButton({value, className, onClick}) {
  return (
    <button className={className} onClick={() => onClick(value)}>
      {value}
    </button>
  )
}

export default CalcButton;
