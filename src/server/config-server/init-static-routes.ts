import expressLib, { Express } from "express";
import i18nextMiddleware from "i18next-http-middleware";
import path from "path";

import i18n from "./render/i18n/init";
import renderThunk from "./server-entry";

function staticRoutes(
    express: typeof expressLib,
    app: Express,
    done: () => Promise<void>
) {
    // static path where files such as images and js will be served from
    app.use("/static", express.static(path.join(process.cwd(), "dist/client")));

    // =================== WARNING ===================
    // ATTENTION this will expose ALL server files
    // =================== WARNING ===================
    app.use("/server", express.static(path.join(process.cwd(), "dist/server")));

    const serverRender = renderThunk();

    i18n.init(
        {
            ns: ["mainModule"],
            defaultNS: "mainModule",
        },
        () => {
            app.disable("x-powered-by")
                .use(i18nextMiddleware.handle(i18n))
                .get("/*", serverRender);
        }
    );
    // app.get("/*", serverRender);

    done();
}

export default staticRoutes;
