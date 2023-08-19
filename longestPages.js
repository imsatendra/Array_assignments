// Longest Book: Write a function getLongestBook
// that returns the title of the book with the most pages.

const library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    pages: 180,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    pages: 281,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    pages: 328,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    pages: 432,
  },
];

const getLongestBook = (library) => {
  return library.reduce((longest, book) => {
    return book.pages > longest.pages ? book : longest;
  }, library[0]).title;
};

console.log(getLongestBook(library));
