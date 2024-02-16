import { ValidationsParams } from "../index-middleware";

export const fakeValidation = (validationParams: ValidationsParams) => {
    // eslint-disable-next-line no-constant-condition
    if (false) validationParams.res.status(403).send({ message: "Forbidden" });
};
