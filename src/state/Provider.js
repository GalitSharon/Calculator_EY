import React from 'react';
import {actions} from './actions';
import {CalcContext} from './context';
import {reducer, initialState} from './reducer';

function Provider({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    expression: state.expression,
    result: state.result,
    recentCalculations: state.recentCalculations,
    addSelectedValue: value => {
      dispatch({type: actions.ADD_SELECTED_VALUE, value});
    },
    deleteLastValue: value => {
      dispatch({type: actions.DELETE_LAST_VALUE, value});
    },
    calculateResult: value => {
      dispatch({type: actions.CALCULATE_RESULT, value});
    },
    selectCalculation: value => {
      dispatch({type: actions.SELECT_CALCULATION, value});
    },
    reset: () => {
      dispatch({type: actions.RESET});
    },
    resetAll: () => {
      dispatch({type: actions.RESET_ALL});
    }
  };

  return (
    <CalcContext.Provider value={value}>
      {children}
    </CalcContext.Provider>
  );
}

export default Provider;
