export function getCurrencyInfoXML(currency: string) {
    return `<?xml version="1.0" encoding="utf-8"?> 
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"> 
      <soap:Body> 
        <getCurrencyInfo xmlns="urn:intcomex:trax:replica:WSTraxRepl"> 
          <icurrencyid>${currency}</icurrencyid> 
        </getCurrencyInfo> 
      </soap:Body> 
    </soap:Envelope> 
    
    `;
}
