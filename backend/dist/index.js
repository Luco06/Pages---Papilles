import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schemas/userSchema.js";
import { resolvers } from "./resolvers/userResolver.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const startServer = async () => {
    // Vérifiez si DB_URL est défini
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
        throw new Error("DB_URL is not defined in .env");
    }
    // Connexion à MongoDB
    await mongoose.connect(dbUrl);
    console.log("✅ Connected to MongoDB");
    // Création du serveur Apollo
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    // Démarrer le serveur Apollo en mode standalone (gère lui-même Express)
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀 Server ready at: ${url}`);
};
startServer().catch((error) => {
    console.error("❌ Error starting server:", error);
});
