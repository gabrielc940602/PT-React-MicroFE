import axios from "axios";

export default async function getCurrencyExchange(
    inputcurrency: string,
    outputcurrency: string
) {
    const apikey = "fca_live_xxypMqbaOvkk0AhR0VBsPODF1hSjJNP2wQDsqmWC";
    const headers = {
        "Content-Type": "application/json",
    };

    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apikey}&base_currency=${inputcurrency}&currencies=${outputcurrency}`;

    const response = await axios.get(url, { headers });

    return response.data;
}
