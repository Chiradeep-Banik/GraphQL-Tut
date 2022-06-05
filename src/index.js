const { ApolloServer } = require('apollo-server')

const helloTypeDefs = require('./Schema/helloSchema.js');
const helloResolvers = require('./resolver/helloResolver');

const PORT = process.env.PORT || 1313;

const server = new ApolloServer({
  typeDefs: helloTypeDefs,
  resolvers: helloResolvers,
});

server.listen(PORT)
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  }).catch((err)=>{
    console.error(err);
  });