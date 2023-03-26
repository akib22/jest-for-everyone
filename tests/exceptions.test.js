const willReturnNaN = () => NaN;
const willReturnNull = () => null;
const willReturnUndefined = () => undefined;

it('should return null value', () => {
    expect(willReturnNull()).toBe(null);
});

it('should return undefined value', () => {
    expect(willReturnUndefined()).toBe(undefined);
});

it('should return NaN value', () => {
    expect(willReturnNaN()).toBe(NaN);
});

// Better to use this
it('should return null value', () => {
    expect(willReturnNull()).toBeNull();
});

it('should return undefined value', () => {
    expect(willReturnUndefined()).toBeUndefined();
});

it('should return NaN value', () => {
    expect(willReturnNaN()).toBeNaN();
});
