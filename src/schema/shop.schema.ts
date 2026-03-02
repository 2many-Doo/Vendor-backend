import { gql } from "graphql-tag";

export const shopSchema = gql`
  type Shop {
    id: ID!
    name: String!
    address: String!
    phone: String!
    email: String!
  }
  type Query {
    getShops: [Shop!]!
    getShop(id: ID!): Shop
  }
  type Mutation {
    createShop(input: CreateShopInput!): Shop!
  }
  input CreateShopInput {
    name: String!
    address: String!
    phone: String!
    email: String!
  }
`;
