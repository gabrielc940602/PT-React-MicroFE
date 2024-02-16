import TraxConfig from "@server/config-services/trax-config";
import axios from "axios";

import { parseXml } from "../../helpers/parse-xml";
import { ParamsGetCurrencyInfoTrax, ResponseCurrencyInfo } from "./types";
import { getCurrencyInfoXML } from "./xml/get-currency-info-xml";

export default async function getCurrencyInfo({
    currency,
}: ParamsGetCurrencyInfoTrax) {
    const url = `${TraxConfig.url}:${TraxConfig.port}${TraxConfig.endpoint}`;
    const xml = getCurrencyInfoXML(currency);
    // This is a mock function that returns a promise
    const headers = {
        SOAPAction: "urn:TraxV2:WsRpccall/WsRpccallObj/rpccallRequest",
        "Content-Type": "text/xml;charset=UTF-8",
    };

    const response = await axios.post(url, xml, { headers });

    return parseXml<ResponseCurrencyInfo>(response.data)
        .getCurrencyInfoResponse;
}
