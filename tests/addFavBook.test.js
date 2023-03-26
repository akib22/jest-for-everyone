const { mockDB, addFavBook } = require('../src/addFavBook');

it('should add new book to the list', () => {
    const newBook = 'Atomic Habits';

    addFavBook(newBook);

    expect(mockDB).toContain(newBook);
});
