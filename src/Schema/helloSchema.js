const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String,
    fuck: String
  }
`);

module.exports = schema;