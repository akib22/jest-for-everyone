const mockDB = [];

function addFavBook(book) {
    mockDB.push(book);
}

module.exports = {
    addFavBook,
    mockDB,
};
