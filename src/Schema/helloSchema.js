const { gql } = require('apollo-server');

const typedefs = gql(`
  type Query {
    hello: String!,
    fuck: String,
    num: Int,
    book: Book,
    books:[Book],
    author:Author,
  }
  type Book {
    title: String,
    author: Author
  }
  type Author {
    id: Int!,
    name: String,
  }

`);

module.exports = typedefs;