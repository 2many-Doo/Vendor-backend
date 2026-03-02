import { DeliveryPerson } from "@/models/delivery-person.model";
import {
  CreateDeliveryPersonInput,
  MutationResolvers,
} from "../../types/generated";
import { GraphQLError } from "graphql";

export const createDeliveryPerson: MutationResolvers["createDeliveryPerson"] =
  async (
    _: unknown,
    { input }: { input: CreateDeliveryPersonInput },
    context
  ) => {
    try {
      // Context-оос companyId авах
      if (!context.user?.companyId) {
        throw new GraphQLError("Unauthorized: Company ID not found", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }

      const deliveryPerson = await DeliveryPerson.create({
        companyId: context.user.companyId,
        name: input.name,
        email: input.email,
        phone: input.phone,
        address: input.address,
        ...(input.image && { image: input.image }),
      });

      return {
        id: (deliveryPerson as { _id: { toString(): string } })._id.toString(),
        companyId: deliveryPerson.companyId.toString(),
        name: deliveryPerson.name,
        email: deliveryPerson.email,
        phone: deliveryPerson.phone,
        address: deliveryPerson.address,
        image: deliveryPerson.image,
      } as any;
    } catch (error) {
      if (error instanceof GraphQLError) {
        throw error;
      }
      throw new GraphQLError(
        error instanceof Error
          ? error.message
          : "Failed to create delivery person",
        {
          extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
        }
      );
    }
  };
