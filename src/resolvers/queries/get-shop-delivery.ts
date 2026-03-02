import { ShopDelivery } from "@/models/shop-delivery.model";
import { QueryResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const getShopDelivery: QueryResolvers["getShopDelivery"] = async (
  _: unknown,
  { id }: { id: string }
) => {
  try {
    const shopDelivery = await ShopDelivery.findById(id)
      .populate("shopId")
      .populate("deliveryPersonId");

    if (!shopDelivery) {
      throw new GraphQLError("Shop delivery not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

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
        companyId: shopDelivery.companyId.toString(),
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
      error instanceof Error ? error.message : "Failed to fetch shop delivery",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
