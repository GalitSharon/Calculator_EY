import {calculateExpression, isOperator} from './math-calculations';

/**
 * Concat user selected value to the main expression
 */
export function addSelectedValue(value, expression) {
  const isSelectionValid = checkValidity(value, expression);
  return isSelectionValid ? expression + value : expression;
}

/**
 * Deletes last value from expression
 */
export function deleteLastValue(expression) {
  return expression.substring(0, expression.length - 1);
}

/**
 * Evaluate the expression
 */
export function calculateResult(expression) {
  return calculateExpression(expression);
}

/**
 * Validate User input
 */
function checkValidity(selection, expression) {
  const isSelectOperator = isOperator(selection);
  const isLastSelectOperator = isOperator(expression[expression.length - 1]);

  // Checks if selection is a number or '-'
  if(!isSelectOperator || selection === '-') {
    return true;
  }
  // Checks if expression is not empty
  if (!expression) {
    return false
  }
  // Checks if there is no sequence of operators
  return !isLastSelectOperator;
}
