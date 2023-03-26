function extendedSayHi(name) {
    const greetings = Math.random() * 10 > 5 ? 'Hello' : 'Hi';

    return `${greetings} ${name}!`;
}

module.exports = extendedSayHi;
