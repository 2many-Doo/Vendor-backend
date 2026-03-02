import { Shop } from "@/models";
import { QueryResolvers } from "@/types/generated";
import { GraphQLError } from "graphql";

export const getShops: QueryResolvers["getShops"] = async () => {
  try {
    const shops = await Shop.find();

    return shops.map((shop) => ({
      id: (shop as { _id: { toString(): string } })._id.toString(),
      name: shop.name,
      address: shop.address,
      phone: shop.phone,
      email: shop.email,
    }));
  } catch (error) {
    throw new GraphQLError(
      error instanceof Error ? error.message : "Failed to fetch shops",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
