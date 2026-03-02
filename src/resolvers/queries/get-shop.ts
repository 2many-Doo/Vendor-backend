import { Shop } from "@/models";
import { QueryResolvers } from "@/types/generated";
import { GraphQLError } from "graphql";

export const getShop: QueryResolvers["getShop"] = async (
  _: unknown,
  { id }: { id: string }
) => {
  try {
    const found = await Shop.findById(id);

    if (!found) {
      throw new GraphQLError("Shop not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    return {
      id: (found as { _id: { toString(): string } })._id.toString(),
      name: found.name,
      address: found.address,
      phone: found.phone,
      email: found.email,
    };
  } catch (error) {
    if (error instanceof GraphQLError) {
      throw error;
    }
    throw new GraphQLError(
      error instanceof Error ? error.message : "Failed to fetch shop",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
