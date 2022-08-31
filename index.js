const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { categories, products, reviews } = require("./db");

const server = new ApolloServer({
  typeDefs, // typeDefs is the schema
  resolvers: {  // resolvers is the resolver
    Query,  // Query is the root query
    Category, // Category is the category query
    Product,  // Product is the product query
  },
  context: { categories, products, reviews },   
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});



// https://www.youtube.com/watch?v=qux4-yWeZvo&t=11581s