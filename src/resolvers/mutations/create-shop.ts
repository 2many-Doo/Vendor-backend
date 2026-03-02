import { Shop } from "@/models/shop.model";
import { MutationResolvers, CreateShopInput } from "../../types/generated";
import { GraphQLError } from "graphql";

export const createShop: MutationResolvers["createShop"] = async (
  _: unknown,
  { input }: { input: CreateShopInput }
) => {
  try {
    const shop = await Shop.create(input);
    return {
      id: (shop as { _id: { toString(): string } })._id.toString(),
      name: shop.name,
      address: shop.address,
      phone: shop.phone,
      email: shop.email,
    };
  } catch (error) {
    throw new GraphQLError(
      error instanceof Error ? error.message : "Failed to create shop",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
