import ActionsPage from "pages/authenticated-pages/actions-page/actions.page";
import OtherActionsPage from "pages/authenticated-pages/actions-page/other-actions-page/other-actions-page";

export default [
    { path: "/actions-page", element: <ActionsPage /> },
    {
        path: "/actions-page/other-actions-page",
        element: <OtherActionsPage />,
    },
] as RouteData[];
