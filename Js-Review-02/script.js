const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const book = getBook(3);
// book;
// // const title = book.title;
// // const author = book.author;

// const { title, author, pages, publicationDate, genres } = book; // Object Destructuring

// console.log(author, title);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre] = genres; // Array Destructuring took ony 1st two

// // Rest symbol ...

// const [first, second, ...others] = genres; // asigns all of the values to others except first and second

// //const [first, ...others, last] = genres;   //ERROR

// const newGenres = ["epic fantasy", ...genres, "literary fiction"]; // Spread operator puts all the values of genres heres into single array

// console.log(primaryGenre, secondaryGenre, others, newGenres);

// const updatedBook = {
//   ...book,
//   // added new property
//   moviePublicationDate: "2001-12-19",
//   // updated property
//   pages: 1210,
// };

// updatedBook;

// // TEMPLATE LITERALS
// const summary = `${title} a book`;
// summary;

// // TERNARY OPERATOR
// const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
// pagesRange;

// //ARROW FUNCTIONS
// function getYear(date) {
//   return date.split("-")[0];
// }

// const getnew = (date) => date.split("-")[0]; // same as above using arrow function)

// console.log(getYear(publicationDate));
// console.log(getnew(publicationDate));

// // SHORT CIRCUITING WITH AND (&&) OR (||) OPERATORS
// console.log(true && "A string"); // returns last truthy value
// console.log(false && "A string"); // returns first falsy value

// // falsy values in JS : false, 0, "", null, undefined, NaN

// console.log(true || "A string"); // returns first truthy value
// console.log(false || "A string"); // returns last falsy value

// const count = 0 ?? "no data"; // nullish coalescing operator only takes null and undefined as falsy values
// count;

// //OPTIONAL CHAINING

// function getTotalReviewCount(book) {
//   const goodread = book.reviews.goodreads?.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0; // optional chaining operator (?.) checks if librarything exists or not
//   return goodread + librarything;
// }

// // console.log(getTotalReviewCount(book));

// // THE ARRAY MAP METHOD
// const books = getBooks();

// const x = [1, 2, 3, 4].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// titles;

// // const essentialData = books.map((book) => {
// //   return { title: book.title, author: book.author };
// // });

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewscount: getTotalReviewCount(book),
// }));

// essentialData;

// // THE ARRAY FILTER METHOD
// const longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooks;

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// adventureBooks;

// // THE ARRAY REDUCE METHOD
// // boil down an array to a single value
// const pagesInAllBooks = books.reduce((acc, book) => acc + book.pages, 0); // first values is a callback function with accumulator and current book and 2nd values is initial value of accumulator.
// pagesInAllBooks;

// // SORTING AN ARRAY WITH THE SORT METHOD
// //Changes the original array. not feasible for react state management
// // copy the array first and then sort the copy
// const arr = [5, 3, 8, 1, 4];
// const sorted = arr.slice().sort((a, b) => a - b); // sorts in ascending order
// sorted;
// const dsorted = arr.slice().sort((a, b) => b - a); // sorts in descending order
// dsorted;

// arr;

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedByPages;

// // IMMUTABILE ARRAY OPERATIONS
// // 1) Add a new book to an array
// const newBook = {
//   id: 6,
//   title: "The Hobbit",
//   publicationDate: "1937-09-21",
//   author: "J. R. R. Tolkien",
// };

// const updatedBooks = [...books, newBook];
// updatedBooks;

// // 2) delete a book from an array
// const deletedBooks = updatedBooks.filter((book) => book.id !== 3);
// deletedBooks;

// // 3) update a book in an array
// const bookAfterArray = deletedBooks.map((book) =>
//   book.id === 1 ? { ...book, pages: 1 } : book
// );
// bookAfterArray;

console.log(
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json().then((data) => console.log(data))
  )
);
console.log("hello");
