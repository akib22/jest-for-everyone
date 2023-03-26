const willReturnFalsyValue = () => {
    const val = Math.random(3);
    if (val < 1) {
        return 0;
    }
    if (val < 2) {
        return false;
    }
    if (val < 0) {
        return '';
    }
};

it('should check the falsy value', () => {
    expect(willReturnFalsyValue()).toBeFalsy();
});
