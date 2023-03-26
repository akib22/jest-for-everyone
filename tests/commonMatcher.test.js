test('common matcher example', () => {
    const resultNum = 6;
    const expectedNum = 6;

    expect(resultNum).toBe(expectedNum);
    expect(resultNum).toEqual(expectedNum);
    expect(resultNum).toStrictEqual(expectedNum);

    expect(true).toBe(true);
    expect(false).toEqual(false);
    expect(null).toStrictEqual(null);
});

test('common matcher example with object values', () => {
    expect([]).toBe([]);
});

test('common matcher example with object values', () => {
    expect([]).toEqual([]);
});

test('common matcher example with object values', () => {
    expect([]).toStrictEqual([]);
});

const obj1 = {
    name: 'John',
    age: 25,
    address: undefined,
};

const obj2 = {
    name: 'John',
    age: 25,
};
test('common matcher example with object values', () => {
    expect(obj1).toEqual(obj2);
});

test('common matcher example with object values', () => {
    expect(obj1).toStrictEqual(obj2);
});
