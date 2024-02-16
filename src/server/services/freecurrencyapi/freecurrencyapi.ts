import express from "express";

import getCurrencyExchangeRoute from "./currency/get-currency-exchange/get-currency-exchange-route";

const fcaRoute = express.Router();

fcaRoute.use("/fca-route", getCurrencyExchangeRoute);

export default fcaRoute;
