import { User } from "../models/User.js"; // Assure-toi que tu as un modèle Mongoose User

export const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_: any, { id }: { id: string }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_: any, { input }: { input: { email: string; mdp: string; name: string } }) => {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
  },
};
