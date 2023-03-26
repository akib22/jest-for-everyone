const addUser = require('../src/addUser');

test('should add new user', () => {
    const user = {
        name: 'Chester Bennington',
        profession: 'Singer',
    };
    const result = addUser(user);

    expect(result).toHaveProperty('_id');
    expect(result).toHaveProperty('accessToken');
    expect(result).toMatchObject(user);
});
