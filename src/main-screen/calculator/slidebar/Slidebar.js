import React from 'react';
import CalcButton from '../calc-button/CalcButton';
import {CalcContext} from '../../../state/context';
import './Slidebar.css';
import {OPERATORS} from '../../../utiles/consts';


function Slidebar() {
  const {addSelectedValue} = React.useContext(CalcContext);

  return (
    <div className="slidebar">
      {OPERATORS.map(operator=>
        <CalcButton className="simple-operator" value={operator} key={operator} onClick={addSelectedValue}/>)}
    </div>
  )
}

export default Slidebar;
