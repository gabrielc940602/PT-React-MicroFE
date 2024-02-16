import express, { Response } from "express";
import getCurrencyExchange from "serverclients/trax/freecurrencyapi/get-currency-exchange";

import { ResquestGetCurrencyRate } from "./types";
const getCurrencyExchangeRoute = express.Router();

getCurrencyExchangeRoute.get(
    "/get-currency-exchange",
    (req: ResquestGetCurrencyRate, res: Response) => {
        getCurrencyExchange(req.query.inputcurrency, req.query.outputcurrency)
            .then((resClient) => {
                res.status(200).json(resClient);
            })
            .catch((error) => {
                return res.status(500).json({ type: "api", message: error });
            });
    }
);

export default getCurrencyExchangeRoute;
