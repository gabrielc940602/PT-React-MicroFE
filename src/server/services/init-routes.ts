import cors from "cors";
import { Express } from "express";

import fcaRoute from "./freecurrencyapi/freecurrencyapi";
import { middleware } from "./middleware/index-middleware";
import testRoute from "./trax/trax";

const initializeServicesRoutes = (app: Express) => {
    app.use(
        cors({
            origin: `${process.env.SERVER_HOST}:${process.env.SERVICES_TEMPLATE_PORT}`,
        })
    );

    app.use("/api", middleware, testRoute, fcaRoute);
};

export default initializeServicesRoutes;
