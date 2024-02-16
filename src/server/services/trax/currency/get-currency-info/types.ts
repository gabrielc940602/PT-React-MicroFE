import { Request } from "express";

export type QueryParamsRequestGetCurrencyRate = {
    currency: string;
    customerId: string;
};

export type ResquestGetCurrencyRate = Request<
    object,
    object,
    object,
    QueryParamsRequestGetCurrencyRate
>;
