import { DeliveryPerson } from "@/models/delivery-person.model";
import { QueryResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const getDeliveryPersons: QueryResolvers["getDeliveryPersons"] =
  async () => {
    try {
      const persons = await DeliveryPerson.find();

      return persons.map((person) => ({
        id: person._id.toString(),
        companyId: person.companyId.toString(),
        name: person.name,
        email: person.email,
        phone: person.phone,
        address: person.address,
        image: person.image,
      })) as any;
    } catch (error) {
      throw new GraphQLError(
        error instanceof Error
          ? error.message
          : "Failed to fetch delivery persons",
        {
          extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
        }
      );
    }
  };
