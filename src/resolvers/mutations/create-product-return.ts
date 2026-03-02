import { ProductReturn } from "@/models/product-return.model";
import { Product } from "@/models/product.model";
import {
  CreateProductReturnInput,
  MutationResolvers,
} from "../../types/generated";
import { GraphQLError } from "graphql";

export const createProductReturn: MutationResolvers["createProductReturn"] =
  async (
    _: unknown,
    { input }: { input: CreateProductReturnInput },
    context
  ) => {
    try {
      // Context-оос companyId авах
      if (!context.user?.companyId) {
        throw new GraphQLError("Unauthorized: Company ID not found", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }

      // Product олох
      const product = await Product.findById(input.productId);

      if (!product) {
        throw new GraphQLError("Product not found", {
          extensions: { code: "NOT_FOUND" },
        });
      }

      // totalPrice = Product.price * quantity
      const totalPrice = product.price * input.quantity;

      const productReturn = await ProductReturn.create({
        companyId: context.user.companyId,
        productId: input.productId,
        returnPersonId: input.returnPersonId,
        shopId: input.shopId,
        quantity: input.quantity,
        totalPrice,
      });

      return {
        id: (productReturn as { _id: { toString(): string } })._id.toString(),
        companyId: productReturn.companyId.toString(),
        productId: productReturn.productId.toString(),
        returnPersonId: productReturn.returnPersonId.toString(),
        shopId: productReturn.shopId.toString(),
        quantity: productReturn.quantity,
        totalPrice: productReturn.totalPrice,
      } as any;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError(
        error instanceof Error
          ? error.message
          : "Failed to create product return",
        {
          extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
        }
      );
    }
  };
