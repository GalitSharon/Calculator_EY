import {OPERATORS} from './consts';

/**
 * Checks if value is a math operator
 */
export function isOperator(value) {
  return OPERATORS.includes(value)
}

/**
 * Returns object with the first number presents in the expression and its index
 */
export function getFullNumber(expression) {
  let fullNumber = '';
  let index = 0;

  if (expression[0] === '-') {
    fullNumber += '-';
    index += 1;
  }

  while (expression[index] && !isOperator(expression[index])) {
    index += 1;
  }
  fullNumber = fullNumber + expression.substring(0, index);

  return {fullNumber, index}
}

/**
 * Does the simple math calculation between 2 numbers
 */
export function simpleCalc(firstNum, operator, secondNum) {
  firstNum = parseFloat(firstNum)
  secondNum = parseFloat(secondNum)

  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    case '/':
      return firstNum / secondNum;
    default: throw new Error("In valid operator");
  }
}

/**
 * In case the the operation is a second order one, calculate it first before the first order
 */
function calcSecondOrder(firstNum, operator, expression, index) {
  const secondNumInfo = getFullNumber(expression.substring(index + 1));
  const secondNum = secondNumInfo.fullNumber;
  let result = simpleCalc(firstNum, operator, secondNum).toString();
  expression = expression.substring(index + secondNumInfo.index + 1);

  return result.concat(expression);
}

/**
 * Checks if the second operator in the expression is first order operator.
 * Handles edge case of two operators of first order one after another
 */
function isSecondOperFirstOrder(expression, index) {
  let newExpresion = expression.substring(index);
  let secondInfo = getFullNumber(newExpresion);
  let secondOperator = newExpresion[secondInfo.index];

  return secondOperator === '-' || secondOperator === '+';
}


// 3+5*4


/**
 * Recursively calculate expression and return the mathematical result
 */
export function calculateExpression(expression) {
  if (!expression) {
    return 0;
  }

  const firstNumInfo = getFullNumber(expression);
  const firstNum = firstNumInfo.fullNumber;

  // In case the expression has 2 numbers instead of 1
  if (firstNumInfo.index < expression.length) {
    let operator = expression[firstNumInfo.index];
    let secondNumber;

    // Checks if the operator is a second order operator
    if (operator === '*' || operator === '/') {
      const newExpression = calcSecondOrder(firstNum, operator, expression, firstNumInfo.index)
      return parseFloat(calculateExpression(newExpression));
    }

    // Edge case of two operators of first order one after another
    if (operator === '-') {
      let isFirstOrder = isSecondOperFirstOrder(expression, firstNumInfo.index + 1);
      if (isFirstOrder) {
        const newExpression = calcSecondOrder(firstNum, operator, expression, firstNumInfo.index)
        return calculateExpression(newExpression);
      }
    }

    secondNumber = calculateExpression(expression.substring(firstNumInfo.index + 1));
    return simpleCalc(firstNum, operator, secondNumber);
  }

  return firstNum;
}

