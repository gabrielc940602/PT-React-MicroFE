import dotenv from "dotenv";

const pathEnv =
    process.env.NODE_ENV === "development"
        ? ".env.development"
        : ".env.production";

dotenv.config({ path: pathEnv });

const TraxConfig = {
    url: process.env.SERVER_ERP_TRAX_URL,
    port: process.env.SERVER_ERP_TRAX_PORT,
    endpoint: process.env.SERVER_ERP_TRAX_ENDPOINT,
};

export default TraxConfig;
