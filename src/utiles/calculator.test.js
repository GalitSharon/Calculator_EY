import {calculateResult} from './calculator';

const MATH_CALCULATIONS = [
  {expression: '55+333/5/2-10*2', result: 68.3},
  {expression: '119*13/3*15+1', result: 7735.999999999999},
  {expression: '12+3-10', result: 5},
  {expression: '12-13+10*2', result: 19},
  {expression: '12-13-10*2', result: -21},
  {expression: '12+13-10*2', result: 5},
  {expression: '12-13*4', result: -40},
  {expression: '12-13/2', result: 5.5},
  {expression: '19+555+333+1', result: 908},
  {expression: '19/80-50', result: -49.7625},
  {expression: '88-12-151+3-20/30', result: -72.66666666666667},
  {expression: '12-13+10', result: 9},
  {expression: '80*80*10*2', result: 128000},
  {expression: '995/20/19/200', result: 0.013092105263157894},
  {expression: '995/20', result: 49.75},
  {expression: '88-12-151+80', result: 5},
  {expression: '12.5*2', result: 25},
  {expression: '-12.5*2', result: -25},
];

test('Check if \'calculateResult\' returns the expected results', () => {
  MATH_CALCULATIONS.forEach((calc) => {
    expect(calculateResult(calc.expression)).toBe(calc.result);
  });
});
