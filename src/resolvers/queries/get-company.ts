import { Company } from "@/models/company.model";
import { QueryResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const getCompany: QueryResolvers["getCompany"] = async (
  _: unknown,
  { id }: { id: string }
) => {
  try {
    const company = await Company.findById(id);

    if (!company) {
      throw new GraphQLError("Company not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    return {
      id: company._id.toString(),
      ownerName: company.ownerName,
      email: company.email,
      phone: company.phone,
      address: company.address,
      companyName: company.companyName,
      image: company.image,
    } as any;
  } catch (error) {
    if (error instanceof GraphQLError) {
      throw error;
    }
    throw new GraphQLError(
      error instanceof Error ? error.message : "Failed to fetch company",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
