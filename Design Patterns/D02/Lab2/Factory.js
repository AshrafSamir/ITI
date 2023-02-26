// apply factory pattern to a class` constructor
// const book1 = {
//   title: "Harry Potter",
//   author: "JK Rowling",
//   isbn: "AB123",
// };
// const book2 = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   isbn: "CD456",
// };
// const book3 = {
//   title: "Moby-Dick",
//   author: "Herman Melville",
//   isbn: "EF789",
// };
// const book4 = {
//   title: "Harry Potter",
//   author: "JK Rowling",
//   isbn: "AB123",
// };
// const book5 = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   isbn: "CD456",
// };
// books = [book1, book2, book3, book4, book5];
// console.log(books);

// // apply factory pattern to a class` constructor
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  getBookInfo() {
    return `${this.title} by ${this.author} with ISBN ${this.isbn}`;
  }
}

class BookFactory {
  constructor() {
    this.books = [];
  }
  createBook(title, author, isbn) {
    const book = new Book(title, author, isbn);
    this.books.push(book);
    return book;
  }
  getBooks() {
    return this.books;
  }
}

const bookFactory = new BookFactory();
const book1 = bookFactory.createBook("Harry Potter", "JK Rowling", "AB123");
const book2 = bookFactory.createBook(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "CD456"
);
console.log(book1.getBookInfo());
console.log(book2.getBookInfo());
