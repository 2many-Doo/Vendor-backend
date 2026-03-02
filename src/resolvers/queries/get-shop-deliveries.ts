import { ShopDelivery } from "@/models/shop-delivery.model";
import { QueryResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const getShopDeliveries: QueryResolvers["getShopDeliveries"] = async (
  _,
  __,
  context
) => {
  try {
    const shopDeliveries = await ShopDelivery.find()
      .populate("shopId")
      .populate("deliveryPersonId");

    return shopDeliveries.map((delivery) => ({
      id: delivery._id.toString(),
      companyId: delivery.companyId.toString(),
      shopId: delivery.shopId.toString(),
      deliveryPersonId: delivery.deliveryPersonId.toString(),
      shop: delivery.shopId
        ? {
            id: (delivery.shopId as any)._id.toString(),
            name: (delivery.shopId as any).name,
            address: (delivery.shopId as any).address,
            phone: (delivery.shopId as any).phone,
            email: (delivery.shopId as any).email,
          }
        : null,
      deliveryPerson: delivery.deliveryPersonId
        ? {
            id: (delivery.deliveryPersonId as any)._id.toString(),
            companyId: (delivery.deliveryPersonId as any).companyId.toString(),
            name: (delivery.deliveryPersonId as any).name,
            email: (delivery.deliveryPersonId as any).email,
            phone: (delivery.deliveryPersonId as any).phone,
            address: (delivery.deliveryPersonId as any).address,
            image: (delivery.deliveryPersonId as any).image,
          }
        : null,
      products: delivery.products.map((p) => ({
        companyId: delivery.companyId.toString(),
        productId: p.productId.toString(),
        quantity: p.quantity,
        price: p.price,
      })),
      barcode: delivery.barcode,
      transactionType: delivery.transactionType,
      totalPrice: delivery.totalPrice,
      createdAt: delivery.createdAt,
      updatedAt: delivery.updatedAt,
    })) as any;
  } catch (error) {
    throw new GraphQLError(
      error instanceof Error
        ? error.message
        : "Failed to fetch shop deliveries",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
