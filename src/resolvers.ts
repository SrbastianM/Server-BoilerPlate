import { ResolverMap } from "./types/graphql-utils";

export const resolvers: ResolverMap = {
    Query: {
        hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || "Wordl"}`
    },
    Mutation: {
        register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {
            return email + password;
        }
    }
};