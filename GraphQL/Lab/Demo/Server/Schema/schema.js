const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const AuthorModel = require("../Models/authorModel");
const BookModel = require("../Models/bookModel");

const AuthorType = new GraphQLObjectType({
  name: "AuthorType",
  description: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      description: "Get All Books Per Author",
      resolve: async (parent) => {
        let AllBooks = await BookModel.find({});
        let filteredBooks = AllBooks.filter((book) => {
          return book.author == parent.id;
        });
        return filteredBooks;
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: "BookType",
  description: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    author: { type: GraphQLString },
    numOfPages: { type: GraphQLInt },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "Get All Requests",
  fields: () => ({
    authors: {
      type: new GraphQLList(AuthorType),
      description: "Get All Authors",
      resolve: () => {
        return AuthorModel.find({});
      },
    },
    author: {
      type: AuthorType,
      description: "Get One Author / ID",
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        let foundAuthor = (await AuthorModel.findById(args.id)) || {};
        return foundAuthor;
      },
    },
    books: {
      type: new GraphQLList(BookType),
      description: "Get All Books",
      resolve: () => {
        return BookModel.find({});
      },
    },
    book: {
      type: BookType,
      description: "Get Book / ID",
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return BookModel.findById(args.id);
      },
    },
  }),
});

const mutateQuery = new GraphQLObjectType({
  name: "MutationQuery",
  description: "Mutat Ur DB",
  fields: () => ({
    AddAuthor: {
      type: AuthorType,
      description: "Add New Author",
      args: {
        id: {
          type: GraphQLString,
        },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        books: { type: new GraphQLList(GraphQLString) },
      },
      resolve: (parent, args) => {
        let newAuthor = new AuthorModel({
          name: args.name,
          age: args.age,
          books: args.books,
        });
        console.log("here", newAuthor);
        return newAuthor.save();
      },
    },
    AddBook: {
      type: BookType,
      description: "Add New Book",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        numOfPages: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        let newBook = new BookModel({
          name: args.name,
          author: args.author,
          numOfPages: args.numOfPages,
        });
        return newBook.save();
      },
    },
    DeleteAuthor: {
      type: AuthorType,
      description: "Delete Author",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        let deletedAuthor = await AuthorModel.findByIdAndDelete(args.id);
        return deletedAuthor;
      },
    },
    DeleteBook: {
      type: BookType,
      description: "Delete Book",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        let deletedBook = await BookModel.findByIdAndDelete(args.id);
        return deletedBook;
      },
    },
    UpdateAuthor: {
      type: AuthorType,
      description: "Update Author",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: { type: new GraphQLList(GraphQLString) },
      },
      resolve: async (parent, args) => {
        let updatedAuthor = await AuthorModel.findByIdAndUpdate(args.id, {
          name: args.name,
          age: args.age,
          books: args.books,
        });
        return updatedAuthor;
      },
    },

    UpdateBook: {
      type: BookType,
      description: "Update Book",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        author: { type: GraphQLString },
        numOfPages: { type: GraphQLInt },
      },
      resolve: async (parent, args) => {
        let updatedBook = await BookModel.findByIdAndUpdate(args.id, {
          name: args.name,
          author: args.author,
          numOfPages: args.numOfPages,
        });

        return updatedBook;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: mutateQuery,
});

module.exports = schema;

// # mutation{
// #     AddAuthor(name: "Ahmed", age: 30) {
// #     name
// #     age
// #     books {
// #       name
// #       author
// #       numOfPages
// #     }
// #   }
// # }
// # {
// #   authors{
// #     id
// #     name
// #     age
// #   }
// # }
// # mutation{
// #   AddBook(name: "Book 3", author: "64345ed153be748cab75f188", numOfPages: 300) {
// #      name
// #      author
// #      numOfPages
// #    }
// # }
// # {
// #   author(id: "64345ed153be748cab75f188"){
// #     id
// #     name
// #     age
// #     books{
// #       name
// #     }
// #   }
// # }

// # {
// #   books{
// #     id
// #     name
// #     author
// #   }
// # }
// # {
// #   book(id:"64346107e94406290d4e8131"){
// #     id
// #     name
// #     author
// #   }
// # }
// # mutation{
// #   UpdateBook(id:"64346107e94406290d4e8131", name: "Book 1"){
// #     name
// #     author
// #     numOfPages
// #   }
// # }
// # {
// #   book(id:"64346107e94406290d4e8131"){
// #     id
// #     name
// #     author
// #   }
// # }

// # mutation{
// #   UpdateAuthor(id:"64345ed153be748cab75f188",name:"Ashraf", age: 24){
// #     name
// #     age
// #     books{
// #       name
// #       author
// #       numOfPages
// #     }
// #   }
// # }

// # {
// #   authors{
// #     id
// #     name
// #     age
// #   }
// # }

// # mutation{
// #     AddAuthor(name: "delete me", age: 0) {
// #     name
// #     age
// #     books {
// #       name
// #       author
// #       numOfPages
// #     }
// #   }
// # }

// # mutation{
// #   DeleteAuthor(id:"64346455c5dfb41f05c11226"){
// #     name
// #     age
// #     books{
// #       name
// #     }
// #   }
// # }
