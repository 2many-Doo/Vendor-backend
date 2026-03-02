import { Product } from "@/models/product.model";
import { CreateProductInput, MutationResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const createProduct: MutationResolvers["createProduct"] = async (
  _,
  { input }: { input: CreateProductInput },
  context
) => {
  try {
    // Context-оос companyId авах
    if (!context.user?.companyId) {
      throw new GraphQLError("Unauthorized: Company ID not found", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    const product = await Product.create({
      companyId: context.user.companyId,
      ...input,
    });

    return {
      id: (product as { _id: { toString(): string } })._id.toString(),
      companyId: product.companyId.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      barcode: product.barcode,
      expiredDate: product.expiredDate,
    } as any;
  } catch (error) {
    // Хэрэв error аль хэдийн GraphQLError бол дахин throw хийх
    if (error instanceof GraphQLError) {
      throw error;
    }
    throw new GraphQLError(
      error instanceof Error ? error.message : "Failed to create product",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
