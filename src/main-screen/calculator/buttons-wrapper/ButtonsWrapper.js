import React from 'react';
import CalcButton from '../calc-button/CalcButton';
import {CalcContext} from '../../../state/context';
import './ButtonsWrapper.css';
import {CALC_NUMBERS} from '../../../utiles/consts';


function ButtonsWrapper() {
  const {addSelectedValue, deleteLastValue, calculateResult, reset, resetAll} = React.useContext(CalcContext);

  return (
    <div className="buttons-wrapper">
      <div className="calc-numbers">
        {CALC_NUMBERS.map(number =>
          <CalcButton className="calc-number" value={number} key={number} onClick={addSelectedValue}/>)}
        <CalcButton className="point" value='.' onClick={addSelectedValue}/>
        <CalcButton className="delete" value='del' onClick={deleteLastValue}/>
      </div>
      <div className="user-operators">
        <CalcButton className="clear" value='C' onClick={reset}/>
        <CalcButton className="clear-all" value='AC' onClick={resetAll}/>
        <CalcButton className="equal-sign" value='=' onClick={calculateResult}/>
      </div>
    </div>
  )
}

export default ButtonsWrapper;
