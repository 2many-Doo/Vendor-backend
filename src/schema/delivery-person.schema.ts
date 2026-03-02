import { gql } from "graphql-tag";

export const deliveryPersonSchema = gql`
  type DeliveryPerson {
    companyId: ID!
    id: ID!
    name: String!
    email: String!
    phone: String!
    address: String!
    image: String
  }
  type Query {
    getDeliveryPerson(id: ID!): DeliveryPerson!
    getDeliveryPersons: [DeliveryPerson!]!
  }
  type Mutation {
    createDeliveryPerson(input: CreateDeliveryPersonInput!): DeliveryPerson!
  }
  input CreateDeliveryPersonInput {
    name: String!
    email: String!
    phone: String!
    address: String!
    image: String
  }
`;
