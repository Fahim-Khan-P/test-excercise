const calculator = require('./calculater');

//Three differnet operations on add method!
describe.each([
    [10, 1, 11],
    [14, 16, 30],
    [3, 1, 4],
  ])('Calculator add operations:', (a, b, expected) => {
    test('Addition is:', () => {
      expect(calculator.add(a, b)).toBe(expected);
    });
  });

  //Three differnet operations on add method!
  describe.each([
    [6, 10, -4],
    [10, 10, 0],
    [30, 5, 25],
  ])('Calculator subtract operations:', (a, b, expected) => {
    test('Subtraction is:', () => {
      expect(calculator.sub(a, b)).toBe(expected);
    });
  });
  
  //Three differnet operations on multipication method!
  describe.each([
    [2, -3, -6],
    [2, 23, 46],
    [3, 0, 0],
  ])('Calculator Multiplication operations:', (a, b, expected) => {
    test('Multiplication is:', () => {
      expect(calculator.mul(a, b)).toBe(expected);
    });
  })
  
  //Three differnet operations on division method!
  describe.each([
    [100, 10, 10],
    [-100, -10, 10],
    [-100, 10, -10],
  ])('Calculator Division operations:', (a, b, expected) => {
    test('Division is:', () => {
      expect(calculator.div(a, b)).toBe(expected);
    });
  })