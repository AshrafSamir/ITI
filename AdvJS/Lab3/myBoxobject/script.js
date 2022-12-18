var boxObject = function (height, width, length, material, content) {
  Object.defineProperties(this, {
    height: {
      value: height,
    },
    length: {
      value: length,
    },
    width: {
      value: width,
    },
    material: {
      value: material,
    },
    content: {
      value: content,
    },
    numofbooks: {
      value: content.length,
      writable: true,
    },

    addBook: {
      value: function (book) {
        this.content.push(book);
        this.numofbooks++;
      },
    },

    removeBook: {
      value: function (title) {
        for (var i = 0; i < this.content.length; i++) {
          if (this.content[i].title === title) {
            this.content.splice(i, 1);
            this.numofbooks--;
            bookOject.objectCounter--;
            break;
          }
        }
      },
    },
  });
};

boxObject.prototype.toString = function () {
  return (
    "Box: " +
    this.height +
    "x" +
    this.width +
    "x" +
    this.length +
    " made of " +
    this.material +
    " with " +
    this.numofbooks +
    " books"
  );
};

boxObject.prototype.valueOf = function () {
  return this.numofbooks;
};

var bookOject = function (
  title,
  numofChapters,
  author,
  numofPages,
  publisher,
  numofCopies
) {
  Object.defineProperties(this, {
    title: {
      value: title,
    },
    numofChapters: {
      value: numofChapters,
    },
    author: {
      value: author,
    },
    numofPages: {
      value: numofPages,
    },
    publisher: {
      value: publisher,
    },
    numofCopies: {
      value: numofCopies,
    },
  });

  bookOject.objectCounter++;
};

bookOject.objectCounter = 0;
bookOject.getObjectCounter = function () {
  return bookOject.objectCounter;
};

var book1 = new bookOject("book1", 4, "asd", 120, "asd1", 100);
var book2 = new bookOject("book2", 4, "asdasd", 120, "sd4", 100);
var box1 = new boxObject(10, 20, 5, "asde", [book1, book2]);

console.log(box1.toString());
console.log(box1.valueOf());
box1.addBook(new bookOject("book3", 4, "asd", 120, "ddasd", 100));
console.log(box1.toString());
console.log(box1.valueOf());
box1.removeBook("book3");
console.log(box1.toString());
console.log(box1.valueOf());
console.log(bookOject.getObjectCounter());
console.log(box1.numofbooks);


var box2 = new boxObject(10, 20, 5, "asde", [ book2]);
console.log(box2+box1);