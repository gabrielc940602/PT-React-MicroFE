import { NextFunction, Request, Response } from "express";

import { fakeValidation } from "./validations/validation";

export type ValidationsParams = {
    req: Request;
    res: Response;
    next: NextFunction;
};

export const middleware = (validationParams: ValidationsParams) => {
    fakeValidation(validationParams);

    if (validationParams.res.headersSent) return false;

    validationParams.next();
};
