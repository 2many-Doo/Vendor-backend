import { Company } from "@/models/company.model";
import { CreateCompanyInput, MutationResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const createCompany: MutationResolvers["createCompany"] = async (
  _,
  { input }: { input: CreateCompanyInput }
) => {
  try {
    const company = await Company.create(input);
    return {
      id: (company as { _id: { toString(): string } })._id.toString(),
      ownerName: company.ownerName,
      email: company.email,
      phone: company.phone,
      address: company.address,
      companyName: company.companyName,
      image: company.image || "",
    };
  } catch (error) {
    throw new GraphQLError(
      error instanceof Error ? error.message : "Failed to create company",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
