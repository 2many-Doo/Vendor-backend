import { gql } from "graphql-tag";

export const companySchema = gql`
  type Company {
    id: ID!
    ownerName: String!
    email: String!
    phone: String!
    address: String!
    companyName: String!
    image: String
  }
  type Query {
    getCompany(id: ID!): Company!
    getCompanies: [Company!]!
  }
  type Mutation {
    createCompany(input: CreateCompanyInput!): Company!
  }
  input CreateCompanyInput {
    ownerName: String!
    email: String!
    phone: String!
    address: String!
    companyName: String!
    image: String
  }
`;
