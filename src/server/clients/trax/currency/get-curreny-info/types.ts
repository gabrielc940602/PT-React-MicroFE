export type ParamsGetCurrencyInfoTrax = {
    currency: string;
};

export type GetCurrencyInfoResponse = {
    odescription: string;
    onumdecimals: number;
    osymbol: number;
    result: string;
};

export type ResponseCurrencyInfo = {
    getCurrencyInfoResponse: GetCurrencyInfoResponse;
};
