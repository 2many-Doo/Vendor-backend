import { NextRequest } from "next/server";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { connectDataBase } from "@/database/connectDatabase";
import { typeDefs } from "@/schema";
import { resolvers } from "@/resolvers";
import { Context } from "@/context/context";

connectDataBase();

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
  context: async (req) => {
    // TODO: Authentication-оос user мэдээлэл авах
    // Одоогоор demo/test data ашиглаж байна
    const companyId =
      req.headers.get("x-company-id") || "69816dcc20d7b4e053c69adb";

    return {
      user: {
        id: "demo-user-id",
        companyId,
      },
    };
  },
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
