import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { useStore } from "zustand";

import { storeAuth } from "./config/auth/store/auth-store";
import i18n from "./config/i18n/init";
import RouterAuthenticated from "./router/router-authenticated/router-authenticated";
import RouterUnauthenticated from "./router/router-unauthenticated/router-unauthenticated";

type AuthenticationProps = {
    traxCredentials?: {
        sessionId: number;
        companyId: string;
        currencyList: string[];
    };
    accountInfo?: {
        userId: string;
        customerId: string;
        email: string;
    };
};

type PropsRemoteRoute = AuthenticationProps & {
    authenticated: boolean;
    language: string;
    parentBasePath: string;
    inheritedPath: string;
};

export default function AppForRemote({
    authenticated,
    language,
    ...props
}: PropsRemoteRoute) {
    const { setAuthData, setTraxCredentials } = useStore(storeAuth);

    useEffect(() => {
        if (typeof window !== "undefined") {
            i18n.changeLanguage(language);
        }
    }, [language]);

    useEffect(() => {
        // console.log(props, "props");
        // if (props.accountInfo !== undefined) {
        //     setAuthData(props.accountInfo);
        //     setTraxCredentials(props.traxCredentials);
        // }
    }, [props, setAuthData, setTraxCredentials]);

    if (typeof window !== "undefined") {
        return (
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    {authenticated && (
                        <RouterAuthenticated
                            parentBasePath={props.parentBasePath}
                        />
                    )}

                    {!authenticated && (
                        <RouterUnauthenticated
                            parentBasePath={props.parentBasePath}
                        />
                    )}
                </BrowserRouter>
            </I18nextProvider>
        );
    } else {
        i18n.changeLanguage(language);

        return (
            <I18nextProvider i18n={i18n}>
                <StaticRouter location={props.inheritedPath}>
                    {authenticated && (
                        <RouterAuthenticated
                            parentBasePath={props.parentBasePath}
                        />
                    )}

                    {!authenticated && (
                        <RouterUnauthenticated
                            parentBasePath={props.parentBasePath}
                        />
                    )}
                </StaticRouter>
            </I18nextProvider>
        );
    }
}
