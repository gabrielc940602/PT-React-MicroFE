import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import InitializeApp from "./initialize-translation-client-side";

const render = (App: () => JSX.Element) => {
    const root = document.getElementById("root");

    ReactDOMClient.hydrateRoot(
        root as HTMLElement,
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

render(InitializeApp);
