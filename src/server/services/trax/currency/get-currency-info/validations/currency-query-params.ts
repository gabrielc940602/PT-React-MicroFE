import { Request, Response } from "express";

import { reusableQueryValidation } from "../../../../../../server/services/helpers/validation/reusable-query-validation";

const requiredFields = ["currency", "customerId"];

export const validateCurrencyQueryParams = (req: Request, res: Response) => {
    reusableQueryValidation(req, res, requiredFields);
};
