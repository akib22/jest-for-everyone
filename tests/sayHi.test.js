const sayHi = require('../src/sayHi.js');

test('should say hi to John', () => {
    const result = sayHi('John');
    const expected = 'Hi John!';

    expect(result).toBe(expected);
});
