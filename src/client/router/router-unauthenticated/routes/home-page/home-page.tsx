import HomePage from "pages/unauthenticated-pages/home-page/home-page";
import OtherPageForHome from "pages/unauthenticated-pages/home-page/other-page-for-home-page/other-page-for-home-page";
import OtherPageForOtherHomePage from "pages/unauthenticated-pages/home-page/other-page-for-home-page/other-page-for-other-home-page/other-page-for-other-home-page";

export default [
    {
        path: ``,
        element: <HomePage />,
    },
    { path: "/other-page-for-home", element: <OtherPageForHome /> },
    {
        path: "/other-page-for-home/:category",
        element: <OtherPageForOtherHomePage />,
    },
] as RouteData[];
