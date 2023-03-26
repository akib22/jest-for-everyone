const promiseFunc = require('../src/promiseFunc.js');

// then/catch example
test('should test promise value', () => {
    return promiseFunc().then(data => {
        expect(data).toMatch(/promise resolved/i);
    });
});

// async/await example
test('should test promise value', async () => {
    const result = await promiseFunc();
    expect(result).toMatch(/promise resolved/i);
});
