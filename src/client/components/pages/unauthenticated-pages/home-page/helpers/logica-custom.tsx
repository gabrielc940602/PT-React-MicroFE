import { useEffect, useState } from "react";

type CustomHookParams = { initialState: string };

export const useCustomHook = ({ initialState }: CustomHookParams) => {
    const [customHookState, setCustomHookState] = useState();

    useEffect(() => {
        initialState;
    }, [initialState]);

    return {
        state: customHookState,
        setState: setCustomHookState,
    };
};
