import express, { Response } from "express";
import getCurrencyInfo from "serverclients/trax/currency/get-curreny-info/get-currency-info";

import { ResquestGetCurrencyRate } from "./types";
import { getInvoicesValidations } from "./validations";

const traxGetCurrencyInfo = express.Router();

traxGetCurrencyInfo.get(
    "/get-currency-info",
    getInvoicesValidations,
    (req: ResquestGetCurrencyRate, res: Response) => {
        getCurrencyInfo({ currency: req.query.currency })
            .then((resClient) => {
                res.status(200).json(resClient);
            })
            .catch((error) => {
                return res.status(500).json({ type: "trax", message: error });
            });
    }
);

export default traxGetCurrencyInfo;
