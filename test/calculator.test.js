const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('multiplies 2*3 to equal 6', () => {
  expect(calculator.multiply(2,3)).toBe(6);
});