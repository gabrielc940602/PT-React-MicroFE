import { Route, Routes } from "react-router-dom";

import actionsPages from "./routes/actions-pages/actions-pages";
import CurrencyExchangePage from "./routes/currency-exchange-pages/currency-exchange-pages";
import otherRouteAuth from "./routes/other-route-auth/other-route-auth";
import transactionsPages from "./routes/transactions-pages/transactions-pages";

type PropsRouter = { parentBasePath?: string };

export default function Router({ parentBasePath }: PropsRouter) {
    const nonNullInheritedPath = parentBasePath
        ? `/${parentBasePath?.split("/").splice(1, 2).join("/")}`
        : "";

    const basePath = `/:lang${nonNullInheritedPath}`;

    const processRoutes = (routes: RouteData[]) =>
        routes.map((routeData, i) => (
            <Route
                key={i}
                path={`${basePath}${routeData.path}`}
                element={routeData.element}
            ></Route>
        ));

    return (
        <Routes>
            {processRoutes(actionsPages)}
            {processRoutes(transactionsPages)}
            {processRoutes(otherRouteAuth)}
            {processRoutes(CurrencyExchangePage)}
        </Routes>
    );
}
