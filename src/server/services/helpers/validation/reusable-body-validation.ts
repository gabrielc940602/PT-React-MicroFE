import { Request, Response } from "express";

export const reusableBodyValidation = (
    req: Request,
    res: Response,
    requiredFields: string[]
) => {
    if (
        req.body === undefined ||
        !requiredFields.every(
            (field) => req?.body?.[field as keyof typeof req.body]
        )
    )
        return res.status(400).send({
            status: "error",
            message: "Bad request: missing required fields in body",
            missingFields: requiredFields.filter(
                (field) => !req?.body?.[field as keyof typeof req.body]
            ),
        });
};
