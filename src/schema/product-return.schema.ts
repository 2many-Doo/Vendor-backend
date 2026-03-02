import { gql } from "graphql-tag";

export const productReturnSchema = gql`
  type ProductReturn {
    companyId: ID!
    productId: ID!
    returnPersonId: ID!
    quantity: Int!
    shopId: ID!
    totalPrice: Float!
  }
  type Query {
    getProductReturns: [ProductReturn!]!
  }
  type Mutation {
    createProductReturn(input: CreateProductReturnInput!): ProductReturn!
  }
  input CreateProductReturnInput {
    productId: ID!
    returnPersonId: ID!
    quantity: Int!
    shopId: ID!
  }
`;
