// List of Book Titles: Write a function getBookTitles that returns an array containing
// only the titles of the books in the library.

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

const getBookTitles = (library) => {
  return library.map((book) => {
    return book.title;
  });
};


console.log(getBookTitles(library));