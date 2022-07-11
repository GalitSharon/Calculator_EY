import React from 'react';
import {CalcContext} from '../../../state/context';
import './Screen.css';

const MAX_DIGITS_NUM = 10;
const RESULT_BIG_FONT_SIZE = '4.5vh';
const RESULT_SMALL_FONT_SIZE = '3.5vh';

function Screen() {
  const {expression, result} = React.useContext(CalcContext);
  let fontSize = result.toString().length > MAX_DIGITS_NUM ? RESULT_SMALL_FONT_SIZE : RESULT_BIG_FONT_SIZE;

  return (
    <div className="calc-screen">
      <div className="expression">{expression}</div>
      <div className="result"
           style={{fontSize: fontSize}}>
        {result}
      </div>
    </div>
  )
}

export default Screen;
