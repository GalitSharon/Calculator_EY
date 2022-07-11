import Screen from './screen/Screen';
import Slidebar from './slidebar/Slidebar';
import ButtonsWrapper from './buttons-wrapper/ButtonsWrapper';
import './Calculator.css';
import React, {useEffect} from 'react';
import {CalcContext} from '../../state/context';
import {CALC_NUMBERS, OPERATORS} from '../../utiles/consts';

function Calculator() {
  const {addSelectedValue, calculateResult, deleteLastValue, expression} = React.useContext(CalcContext);

  function onKeyDown({key}) {
    if (CALC_NUMBERS.includes(key) || OPERATORS.includes(key)) {
      addSelectedValue(key, expression);
    }
    if (key === 'Enter') {
      calculateResult(expression)
    }
    if (key === 'Backspace') {
      deleteLastValue();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Screen/>
        <Slidebar/>
        <ButtonsWrapper/>
      </div>
    </div>
  )
}

export default Calculator;
