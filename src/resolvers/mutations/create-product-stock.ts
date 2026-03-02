import { ProductStock } from "@/models/product-stock.model";
import { Product } from "@/models/product.model";
import {
  CreateProductStockInput,
  MutationResolvers,
} from "../../types/generated";
import { GraphQLError } from "graphql";

export const createProductStock: MutationResolvers["createProductStock"] =
  async (
    _: unknown,
    { input }: { input: CreateProductStockInput },
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

      const productStock = await ProductStock.create({
        companyId: context.user.companyId,
        productId: input.productId,
        quantity: input.quantity,
        totalPrice,
      });

      return {
        id: (productStock as { _id: { toString(): string } })._id.toString(),
        companyId: productStock.companyId.toString(),
        productId: productStock.productId.toString(),
        quantity: productStock.quantity,
        totalPrice: productStock.totalPrice,
      } as any;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError(
        error instanceof Error
          ? error.message
          : "Failed to create product stock",
        {
          extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
        }
      );
    }
  };
