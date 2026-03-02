import { ShopDelivery } from "@/models/shop-delivery.model";
import { Product } from "@/models/product.model";
import {
  CreateShopDeliveryInput,
  MutationResolvers,
} from "../../types/generated";
import { GraphQLError } from "graphql";

export const createShopDelivery: MutationResolvers["createShopDelivery"] =
  async (
    _: unknown,
    { input }: { input: CreateShopDeliveryInput },
    context,
  ) => {
    try {
      // Context-оос companyId авах
      if (!context.user?.companyId) {
        throw new GraphQLError("Unauthorized: Company ID not found", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }

      // Products-ын price авах болон totalPrice тооцоолох
      let totalPrice = 0;
      const productsWithPrice = await Promise.all(
        input.products.map(async (productInput) => {
          const product = await Product.findById(productInput.productId);

          if (!product) {
            throw new GraphQLError(
              `Product not found: ${productInput.productId}`,
              {
                extensions: { code: "NOT_FOUND" },
              },
            );
          }

          const price = product.price;
          totalPrice += price * productInput.quantity;

          return {
            productId: productInput.productId,
            quantity: productInput.quantity,
            price,
          };
        }),
      );

      const shopDelivery = await ShopDelivery.create({
        companyId: context.user.companyId,
        shopId: input.shopId,
        deliveryPersonId: input.deliveryPersonId,
        products: productsWithPrice,
        barcode: input.barcode,
        transactionType: input.transactionType,
        totalPrice,
      });

      // Populate хийж shop болон deliveryPerson мэдээллийг авах
      await shopDelivery.populate("shopId");
      await shopDelivery.populate("deliveryPersonId");

      return {
        id: shopDelivery._id.toString(),
        companyId: shopDelivery.companyId.toString(),
        shopId: shopDelivery.shopId.toString(),
        deliveryPersonId: shopDelivery.deliveryPersonId.toString(),
        shop: shopDelivery.shopId
          ? {
              id: (shopDelivery.shopId as any)._id.toString(),
              name: (shopDelivery.shopId as any).name,
              address: (shopDelivery.shopId as any).address,
              phone: (shopDelivery.shopId as any).phone,
              email: (shopDelivery.shopId as any).email,
            }
          : null,
        deliveryPerson: shopDelivery.deliveryPersonId
          ? {
              id: (shopDelivery.deliveryPersonId as any)._id.toString(),
              companyId: (
                shopDelivery.deliveryPersonId as any
              ).companyId.toString(),
              name: (shopDelivery.deliveryPersonId as any).name,
              email: (shopDelivery.deliveryPersonId as any).email,
              phone: (shopDelivery.deliveryPersonId as any).phone,
              address: (shopDelivery.deliveryPersonId as any).address,
              image: (shopDelivery.deliveryPersonId as any).image,
            }
          : null,
        products: shopDelivery.products.map((p) => ({
          companyId: context.user!.companyId,
          productId: p.productId.toString(),
          quantity: p.quantity,
          price: p.price,
        })),
        barcode: shopDelivery.barcode,
        transactionType: shopDelivery.transactionType,
        totalPrice: shopDelivery.totalPrice,
        createdAt: shopDelivery.createdAt,
        updatedAt: shopDelivery.updatedAt,
      } as any;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError(
        error instanceof Error
          ? error.message
          : "Failed to create shop delivery",
        {
          extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
        },
      );
    }
  };
