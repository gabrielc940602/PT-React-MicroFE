import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type TraxCredentials = {
    sessionId: number;
    companyId: string;
    currencyList: string[];
};

export type CustomAccountInfo = {
    email: string;
    userId: string;
    customerId: string;
};

type StoreAuth = {
    isInIframe: boolean;
    setIsInIframe: (isInIframe: boolean) => void;

    traxCredentials: TraxCredentials | undefined;
    setTraxCredentials: (traxCredentials: TraxCredentials | undefined) => void;
    authData: CustomAccountInfo;
    setAuthData: (authData: CustomAccountInfo) => void;
    cleanCredentials: () => void;
};

export const storeAuth = create<StoreAuth>()(
    persist(
        (set) => ({
            isInIframe: false,
            setIsInIframe: (isInIframe) => set(() => ({ isInIframe })),

            traxCredentials: undefined,
            setTraxCredentials: (traxCredentials) =>
                set(() => ({ traxCredentials })),
            authData: {} as CustomAccountInfo,
            setAuthData: (authData) => set(() => ({ authData })),
            cleanCredentials: () =>
                set(() => ({
                    authData: {} as CustomAccountInfo,
                    traxCredentials: undefined,
                    userEmail: "",
                })),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
