import { ShopDelivery } from "@/models/shop-delivery.model";
import { QueryResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

const mapDelivery = (delivery: any) => ({
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
  products: delivery.products.map((p: any) => ({
    companyId: delivery.companyId.toString(),
    productId: p.productId.toString(),
    quantity: p.quantity,
    price: p.price,
  })),
  barcode: delivery.barcode,
  transactionType: delivery.transactionType ?? "NOT_PAYMENT",
  totalPrice: delivery.totalPrice,
  createdAt: delivery.createdAt,
  updatedAt: delivery.updatedAt,
});

export const getShopDeliveriesByShopId: QueryResolvers["getShopDeliveriesByShopId"] =
  async (_: unknown, { shopId }: { shopId: string }) => {
    try {
      const shopDeliveries = await ShopDelivery.find({ shopId })
        .populate("shopId")
        .populate("deliveryPersonId");

      return shopDeliveries.map(mapDelivery) as any;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error
          ? error.message
          : "Failed to fetch shop deliveries by shop id",
        {
          extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
        }
      );
    }
  };

export const getShopDeliveriesByDeliveryPersonId: QueryResolvers["getShopDeliveriesByDeliveryPersonId"] =
  async (_: unknown, { deliveryPersonId }: { deliveryPersonId: string }) => {
    try {
      const shopDeliveries = await ShopDelivery.find({ deliveryPersonId })
        .populate("shopId")
        .populate("deliveryPersonId");

      return shopDeliveries.map(mapDelivery) as any;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error
          ? error.message
          : "Failed to fetch shop deliveries by delivery person id",
        {
          extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
        }
      );
    }
  };