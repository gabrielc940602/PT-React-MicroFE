import { Request, Response } from "express";

export const reusableQueryValidation = (
    req: Request,
    res: Response,
    requiredFields: string[]
) => {
    if (
        req.query === undefined ||
        !requiredFields.every(
            (field) => req?.query?.[field as keyof typeof req.query]
        )
    )
        return res.status(400).send({
            status: "error",
            message: "Bad request: missing required fields in query params",
            missingFields: requiredFields.filter(
                (field) => !req?.query?.[field as keyof typeof req.query]
            ),
        });
};
