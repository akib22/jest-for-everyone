const floatSum = require('../src/floatSum.js');

test('adding float numbers', () => {
    const result = floatSum(0.2, 0.1);

    expect(result).toBeCloseTo(0.3);
});
