const functions = require('./script');
//Assert
test('The string "undertanding" to equal 4', () => {
  expect(functions.stringLength('care')).toBe(4);
});
 
test('The string "undertanding" to equal error', () => {
  expect(functions.stringLength('undertanding')).toThrow('The string is too short or too long');
});

test('The reverse of "on" should be no', () => {
  expect(functions.reverseString('on')).toMatch('no');
 });
 



