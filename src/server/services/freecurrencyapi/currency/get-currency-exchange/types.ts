import { Request } from "express";

export type QueryParamsRequestGetCurrencyRate = {
    inputcurrency: string;
    outpucurrency: string;
};

export type ResquestGetCurrencyRate =
    Request<QueryParamsRequestGetCurrencyRate>;
