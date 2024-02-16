import "./App.scss";
import "primeicons/primeicons.css";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import translations from "../config/i18n/translations";
import RouterAuthenticated from "./router/router-authenticated/router-authenticated";
import RouterUnauthenticated from "./router/router-unauthenticated/router-unauthenticated";

import("reusable_components/global-styles");

const App = () => {
    const { i18n } = useTranslation();

    const navigate = useNavigate();

    const devOptions = { authenticated: true, inputTranslation: true };

    const className = "app";

    const LangComponent = () =>
        devOptions.inputTranslation && (
            <select
                value={i18n.language}
                className={`${className}__selectlangdev`}
                onChange={(e) => {
                    i18n.changeLanguage(e.target.value);

                    navigate(
                        `/${e.target.value}/${location.pathname.split("/").slice(2).join("/")}`
                    );
                }}
            >
                {Object.keys(translations).map((value) => (
                    <option value={value} key={value}>
                        {
                            translations[value as keyof typeof translations]
                                .general.currentlang
                        }
                    </option>
                ))}
            </select>
        );

    if (devOptions.authenticated)
        return (
            <>
                <LangComponent />
                <RouterAuthenticated />
            </>
        );

    if (!devOptions.authenticated)
        return (
            <>
                <LangComponent />
                <RouterUnauthenticated />
            </>
        );
};

export default App;
