function topBooksByGenre(books) {
  let result = {};

  for (let book of books) {
    if (!result[book.genre] || book.rating > result[book.genre].rating) {
      result[book.genre] = book;
    }
  }

  console.log(result);
}
