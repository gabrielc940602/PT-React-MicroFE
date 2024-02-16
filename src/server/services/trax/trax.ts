import express from "express";

import traxGetCurrencyInfo from "./currency/get-currency-info/get-currency-info-route";

const testRoute = express.Router();

testRoute.use("/test-route", traxGetCurrencyInfo);

export default testRoute;
