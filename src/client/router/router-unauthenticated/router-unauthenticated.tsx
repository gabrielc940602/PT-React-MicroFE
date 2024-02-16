import { Route, Routes } from "react-router-dom";

import homePages from "./routes/home-page/home-page";
import otherUnauthenticatedPage from "./routes/other-unauthenticated-page/other-unauthenticated-page";

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
            {processRoutes(homePages)}
            {processRoutes(otherUnauthenticatedPage)}
        </Routes>
    );
}
