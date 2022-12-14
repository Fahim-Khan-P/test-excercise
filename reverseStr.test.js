const reverseString = require('./reverseStr');

test('The string should reverse!', () => {
    expect(reverseString('hello')).toStrictEqual('olleh');
});