const willReturnTruthyValue = () => {
    const val = Math.random(3);

    if (val < 1) {
        return 1;
    }
    if (val < 2) {
        return true;
    }
    if (val < 0) {
        return 'nothing';
    }
};

it('should check the truthy value', () => {
    expect(willReturnTruthyValue()).toBeTruthy();
});
