import { gql } from "graphql-tag";

export const shopDeliverySchema = gql`
  scalar DateTime

  enum TransactionType {
    CASH
    BANK_TRANSFER
    CREDIT_CARD
    NOT_PAYMENT
  }

  type ShopDelivery {
    id: ID!
    companyId: ID!

    shopId: ID!
    deliveryPersonId: ID!

    shop: Shop
    deliveryPerson: DeliveryPerson

    products: [ShopDeliveryProduct!]!

    barcode: String!
    totalPrice: Float!

    transactionType: TransactionType! # ✅ ENUM
    createdAt: DateTime
    updatedAt: DateTime
  }

  type ShopDeliveryProduct {
    companyId: ID!
    productId: ID!
    product: Product

    quantity: Int!
    price: Float!
  }

  type Query {
    getShopDelivery(id: ID!): ShopDelivery!
    getShopDeliveries: [ShopDelivery!]!
    getShopDeliveriesByShopId(shopId: ID!): [ShopDelivery!]!
    getShopDeliveriesByDeliveryPersonId(deliveryPersonId: ID!): [ShopDelivery!]!
  }

  type Mutation {
    createShopDelivery(input: CreateShopDeliveryInput!): ShopDelivery!
  }

  input CreateShopDeliveryInput {
    shopId: ID!
    deliveryPersonId: ID!
    products: [CreateShopDeliveryProductInput!]!

    barcode: String!

    transactionType: TransactionType! # ✅ ENUM
  }

  input CreateShopDeliveryProductInput {
    productId: ID!
    quantity: Int!
  }
`;
