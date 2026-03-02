import { Product } from "@/models/product.model";
import { QueryResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const getProducts: QueryResolvers["getProducts"] = async () => {
  try {
    const products = await Product.find();
    return products.map((product) => ({
      id: (product as { _id: { toString(): string } })._id.toString(),
      companyId: product.companyId.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      barcode: product.barcode,
      expiredDate: product.expiredDate,
    })) as any;
  } catch (error) {
    throw new GraphQLError(
      error instanceof Error ? error.message : "Failed to fetch products",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
