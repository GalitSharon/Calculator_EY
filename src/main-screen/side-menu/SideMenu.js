import './SideMenu.css';
import React from 'react';
import {CalcContext} from '../../state/context';

function SideMenu() {
  const {recentCalculations, selectCalculation} = React.useContext(CalcContext);

  return (
    <div className="side-menu-container">
      <div className="side-menu">
        <div className="recent-calc-title">Recent Calculations</div>
        <div className="expressions-wrapper">
          {recentCalculations.map((calc, index) =>
            <div className="expression-wrapper" key={index} onClick={() => selectCalculation(index)}>
              <div className="recent-expression">{calc.expression} =</div>
              <div className="recent-result">{calc.result}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SideMenu;
