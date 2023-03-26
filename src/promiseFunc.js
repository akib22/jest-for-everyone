const promiseFunc = error => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise resolved');
        }, 2000);
    });
};

module.exports = promiseFunc;
