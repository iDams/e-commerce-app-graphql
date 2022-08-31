
const { gql } = require("apollo-server");
exports.typeDefs = gql`
type Query {
  hello: String! # ! means that this field is required
  numberOfUsers: Int
  price: Float
  isCool: Boolean
  arryOfUsers: [String!]! # ! means that this field is required in array and must be an array
  products(filter: ProductInput): [Product!]!
  product(id: ID!): Product
  categories: [Category!]!
  category(id: ID!): Category
}

type Mutations {
  addCategory(input: AddCategoryInput!): Category
  addProduct(name: String!, categoryID: ID!): Product
  addReview(productID: ID!, review: String!): Review
}

type Product {
  id: ID!
  name: String!
  description: String!
  quantity: Int!
  price: Float!
  image: String!
  onSale: Boolean!
  category: Category
  reviews: [Review!]!
}

type Category { 
  id: ID!
  name : String!
  products(filter: ProductInput): [Product!]!
}

type Review {
  id: ID!
  date: String!
  # product: Product!
  title: String!
  comment: String!
  rating: Int!
}

input ProductInput { 
  onSale: Boolean
  avgRating: Int
}

input AddCategoryInput {
  name: String!
}

`;

// context is the object that is passed to every resolver function
// args is the object that is passed to every resolver function
// parent is the object that is passed to every resolver function