import { Request, Response } from "express";

export const reusableHeadersValidation = (
    req: Request,
    res: Response,
    requiredFields: string[]
) => {
    if (
        req.body === undefined ||
        !requiredFields.every(
            (field) => req?.headers?.[field as keyof typeof req.headers]
        )
    )
        return res.status(400).send({
            status: "error",
            message: "Bad request: missing required headers",
            missingFields: requiredFields.filter(
                (field) => !req?.headers?.[field as keyof typeof req.headers]
            ),
        });
};
