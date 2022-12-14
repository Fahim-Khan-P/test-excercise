const capitalization = require('./captilization.js')
test('It should capitalize the first letter of the word', () => {
    expect(capitalization("book")).toBe('Book')
})