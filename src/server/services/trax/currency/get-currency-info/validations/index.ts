import { NextFunction, Request, Response } from "express";

import { ResquestGetCurrencyRate } from "../types";
import { validateCurrencyQueryParams } from "./currency-query-params";

export const getInvoicesValidations = (
    req: ResquestGetCurrencyRate,
    res: Response,
    next: NextFunction
) => {
    validateCurrencyQueryParams(req as unknown as Request, res);

    if (res.headersSent) return false;

    next();
};
