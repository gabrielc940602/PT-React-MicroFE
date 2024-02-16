import dotenv from "dotenv";
import express from "express";

import initStaticRoutes from "./config-server/init-static-routes";
import initializeServicesRoutes from "./services/init-routes";

const app = express();

const pathEnv =
    process.env.NODE_ENV === "development"
        ? ".env.development"
        : ".env.production";

dotenv.config({ path: pathEnv });

const { PORT } = process.env;

const done = async () => {
    try {
        // Start http server
        app.listen(PORT, () => {
            console.info(
                `[${new Date().toISOString()}]`,
                `Shell App is running: 🌎 http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error(error);
    }
};

initializeServicesRoutes(app);

initStaticRoutes(express, app, done);

export default app;
