import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { useStore } from "zustand";

import App from "./App";
import { storeAuth } from "./config/auth/store/auth-store";
import i18n from "./config/i18n/init";

export default function InitializeApp() {
    const { setAuthData, setTraxCredentials } = useStore(storeAuth);

    useEffect(() => {
        setAuthData({
            email: process.env.EMAIL_DEV as string,
            userId: process.env.USER_ID_DEV as string,
            customerId: process.env.CUSTOMER_ID_DEV as string,
        });

        setTraxCredentials({
            sessionId: parseInt(process.env.SESSION_ID_DEV as string),
            companyId: process.env.COMPANY_ID_DEV as string,
            currencyList: (process.env.CURRENCY_LIST_DEV ?? "").split(","),
        });
    }, [setAuthData, setTraxCredentials]);

    return (
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    );
}
