import {addSelectedValue, calculateResult, deleteLastValue} from '../utiles/calculator';
import {actions} from './actions';

export const initialState = {
  expression: '',
  result: 0,
  recentCalculations:[]
};

export function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_SELECTED_VALUE:
      return {...state, expression: addSelectedValue(action.value, state.expression)};
    case actions.DELETE_LAST_VALUE:
      return {...state, expression: deleteLastValue(state.expression)};
    case actions.CALCULATE_RESULT:
      const currentResult = calculateResult(state.expression);
      const recentCalculations66 = [...state.recentCalculations, {expression: state.expression, result: currentResult}];
      return {...state, result: currentResult, recentCalculations: recentCalculations66};
    case actions.SELECT_CALCULATION:
      const userSelection = state.recentCalculations[action.value];
      return {...state, expression: userSelection.expression, result: userSelection.result};
    case actions.RESET:
      return {...state, expression: '', result: 0};
    case actions.RESET_ALL:
      return {...state, ...initialState};
    default:
      return state;
  }
}



















