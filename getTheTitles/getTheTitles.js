const getTheTitles = function(array) {
    const bookTitles = array.map(book => `${book.title}`);
    return bookTitles
}

module.exports = getTheTitles;
