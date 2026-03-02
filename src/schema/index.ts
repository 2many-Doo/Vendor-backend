import { companySchema } from "./company.schema";
import { deliveryPersonSchema } from "./delivery-person.schema";
import { productSchema } from "./product.schema";
import { productStockSchema } from "./product-stock.schema";
import { shopSchema } from "./shop.schema";
import { shopDeliverySchema } from "./shop-delivery.schema";
import { productReturnSchema } from "./product-return.schema";

export const typeDefs = [
  companySchema,
  deliveryPersonSchema,
  productSchema,
  productStockSchema,
  shopSchema,
  shopDeliverySchema,
  productReturnSchema,
];
