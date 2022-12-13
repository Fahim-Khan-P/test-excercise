const stringLength = require("./stringlenth");

test('Check the length of String:', () => {
  expect(stringLength('wellcome')).toBe(8);
});

test('Check the length of String:', () => {
  expect(stringLength('KhanZamanStudio')).toBe(false);
});