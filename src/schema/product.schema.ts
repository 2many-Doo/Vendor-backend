import { gql } from "graphql-tag";

export const productSchema = gql`
  scalar DateTime
  type Product {
    companyId: ID!
    id: ID!
    name: String!
    description: String!
    price: Float!
    image: String!
    barcode: String!
    expiredDate: DateTime!
  }

  type Query {
    getProducts: [Product!]!
    getProduct(id: ID!): Product!
    productByBarcode(barcode: String!): Product
  }
  type Mutation {
    createProduct(input: CreateProductInput!): Product!
  }
  input CreateProductInput {
    name: String!
    description: String!
    price: Float!
    image: String!
    barcode: String!
    expiredDate: DateTime!
  }
`;
