export const optionSelect = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "CAD", label: "CAD" },
    { value: "JPY", label: "JPY" },
    { value: "BGN", label: "BGN" },
    { value: "CZK", label: "CZK" },
    { value: "RUB", label: "RUB" },
    { value: "CNY", label: "CNY" },
    { value: "INR", label: "INR" },
];

export function transformCurrencyExchangeData(
    currencyinput: string,
    exchangevalue: number
) {
    const currencyOutput =
        parseFloat(currencyinput) * parseFloat(exchangevalue).toFixed(2);
    return currencyOutput;
}
