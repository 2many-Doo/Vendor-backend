import { gql } from "graphql-tag";

export const productStockSchema = gql`
  type ProductStock {
    companyId: ID!
    id: ID!
    productId: ID!
    product: Product
    quantity: Int!
    totalPrice: Float!
  }
  type Query {
    getProductStocks: [ProductStock!]!
  }
  type Mutation {
    createProductStock(input: CreateProductStockInput!): ProductStock!
  }
  input CreateProductStockInput {
    productId: ID!
    quantity: Int!
  }
`;
