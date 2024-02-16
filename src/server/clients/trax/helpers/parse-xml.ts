import { XMLParser } from "fast-xml-parser";

export const parseXml = <ResponseType>(xml: string): ResponseType => {
    const parser = new XMLParser();
    const parsedXML = parser.parse(xml);

    return parsedXML["SOAP-ENV:Envelope"]["SOAP-ENV:Body"];
};
