const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// const { GraphQLSchema,GraphQLObjectType,GraphQLString,buildSchema } = require('graphql');

const helloSchema = require('./Schema/helloSchema.js');

const PORT = process.env.PORT || 1313;

const app = express();

app.get('/',(req,res)=>{
    res.json({
        woking: true,
        msg:"The server is LIVE"
    });
});

// const dummyScema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: "dummy",
//         fields: ()=>{
//             return {
//             dummyMsg: {
//                 type : GraphQLString,
//                 resolve: ()=>{return "Hello DUmmy !!"}
//             }
//         }}
//     })
// });

// app.use('graphql',graphqlHTTP({
//     graphiql: true,
//     schema: dummyScema
// }));

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  fuck:()=>{
    return "Fuck you";
  }
};

app.use('/graphql', graphqlHTTP({
  schema: helloSchema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});