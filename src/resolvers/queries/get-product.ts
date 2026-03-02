import { Product } from "@/models/product.model";
import { QueryResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const getProduct: QueryResolvers["getProduct"] = async (
  _: unknown,
  { id }: { id: string }
) => {
  try {
    const product = await Product.findById(id);

    if (!product) {
      throw new GraphQLError("Product not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    return {
      id: product._id.toString(),
      companyId: product.companyId.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      barcode: product.barcode,
      expiredDate: product.expiredDate,
    } as any;
  } catch (error) {
    if (error instanceof GraphQLError) {
      throw error;
    }
    throw new GraphQLError(
      error instanceof Error ? error.message : "Failed to fetch product",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
