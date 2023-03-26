const addUser = userObj => {
    // save the user in the database
    return {
        _id: Math.random(10),
        accessToken: `Token_${Math.random()}`,
        ...userObj,
    };
};

module.exports = addUser;
