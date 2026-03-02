import { Company } from "@/models/company.model";
import { QueryResolvers } from "../../types/generated";
import { GraphQLError } from "graphql";

export const getCompanies: QueryResolvers["getCompanies"] = async () => {
  try {
    const companies = await Company.find();
    return companies.map((company) => ({
      id: (company as { _id: { toString(): string } })._id.toString(),
      ownerName: company.ownerName,
      email: company.email,
      phone: company.phone,
      address: company.address,
      companyName: company.companyName,
      image: company.image,
    })) as any;
  } catch (error) {
    throw new GraphQLError(
      error instanceof Error ? error.message : "Failed to fetch companies",
      {
        extensions: { code: "INTERNAL_SERVER_ERROR", originalError: error },
      }
    );
  }
};
