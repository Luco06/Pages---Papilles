import { User } from "../models/User.js"; // Assure-toi que tu as un modèle Mongoose User
export const resolvers = {
    Query: {
        users: async () => await User.find(),
        user: async (_, { id }) => await User.findById(id),
    },
    Mutation: {
        createUser: async (_, { input }) => {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
    },
};
