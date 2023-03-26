const willThrowError = () => {
    throw new Error('This is a funny error.');
};

// it('should check throw error or not', () => {
//     expect(willThrowError()).toThrow();
// });

it('should check throw error or not', () => {
    expect(() => willThrowError()).toThrow();
    expect(() => willThrowError()).toThrow(/funny error/i);
});
