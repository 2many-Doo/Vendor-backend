import { DeliveryPerson } from "@/models/delivery-person.model";
import { QueryResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const getDeliveryPerson: QueryResolvers["getDeliveryPerson"] = async (
  _: unknown,
  { id }: { id: string }
) => {
  try {
    const person = await DeliveryPerson.findById(id);

    if (!person) {
      throw new GraphQLError("Delivery person not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    return {
      id: person._id.toString(),
      companyId: person.companyId.toString(),
      name: person.name,
      email: person.email,
      phone: person.phone,
      address: person.address,
      image: person.image,
    } as any;
  } catch (error) {
    if (error instanceof GraphQLError) {
      throw error;
    }
    throw new GraphQLError(
      error instanceof Error
        ? error.message
        : "Failed to fetch delivery person",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
