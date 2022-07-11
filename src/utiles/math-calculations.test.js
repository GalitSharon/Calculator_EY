import {isOperator, getFullNumber, simpleCalc} from './math-calculations';

const OPERATORS_OBJECTS = [
  {operator: '+', result: true},
  {operator: '-', result: true},
  {operator: '*', result: true},
  {operator: '/', result: true},
  {operator: '', result: false},
  {operator: 'fff', result: false},
  {operator: '56', result: false},
]

const NUMBERS = [
  {expression: '55+333/5/2-10*2', firstNumber: '55'},
  {expression: '119*13/3*15+1', firstNumber: '119'},
  {expression: '-12+3-10', firstNumber: '-12'},
  {expression: '19.5/80-50', firstNumber: "19.5"},
  {expression: '88.7-12-151+3-20/30', firstNumber: "88.7"},
];

const SIMPLE_CALCULATIONS = [
  {firstNumber: '24', operator: '*', secondNumber: '3', result: 72},
  {firstNumber: '-2', operator: '+', secondNumber: '5', result: 3},
  {firstNumber: '12.5', operator: '-', secondNumber: '0.5', result: 12},
  {firstNumber: '33', operator: '/', secondNumber: '2', result: 16.5},
  {firstNumber: '1', operator: '-', secondNumber: '50.1', result: -49.1}
];

test("Check if 'isOperator' returns the expected value", () => {
  OPERATORS_OBJECTS.forEach((obj) => {
    expect(isOperator(obj.operator)).toBe(obj.result);
  });
});

test("Check if 'getFullNumber' returns the expected number", () => {
  NUMBERS.forEach((obj) => {
    expect((getFullNumber(obj.expression)).fullNumber).toBe(obj.firstNumber);
  });
});

test("Check if 'simpleCalc' returns the expected result", () => {
  SIMPLE_CALCULATIONS.forEach((obj) => {
    expect(simpleCalc(obj.firstNumber, obj.operator, obj.secondNumber)).toBe(obj.result);
  });
});



