// Books Published After a Given Year: Write a function getBooksPublishedAfterYear(year) that takes a year as 
// a parameter and returns an array containing the titles of books published after that year.

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


const getBooksTitlePublishedAfterYear = (library , year) => {

    return library.filter((bookDetails) => {
        return bookDetails.year > year;
    }).map((filterdBookDetails) => {
        return filterdBookDetails.title;
    })

}

console.log(getBooksTitlePublishedAfterYear(library , 1813));