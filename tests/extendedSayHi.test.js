const extendedSayHi = require('../src/extendedSayHi.js');

test('should say hi to John', () => {
    const result = extendedSayHi('John');

    expect(result).toMatch(/(Hi|Hello)\s+john/i);
});
