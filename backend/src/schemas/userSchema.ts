const typeDefs = `#gql
  type User {
    id: ID!
    email: String!
    name: String!
  }

  type Query {
    users: [User]  # Pour récupérer tous les utilisateurs
    user(id: ID!): User  # Pour récupérer un utilisateur par ID
  }

  input CreateUserInput {
    email: String!
    mdp: String!
    name: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`;
export default typeDefs;