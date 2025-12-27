class CurrencyConverter {
  static async fetchRate() {
    const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.rates.BDT;
  }
  static async usdToBdt(amount) {
    const rate = await CurrencyConverter.fetchRate();
    const bdt = amount * rate;
    return bdt;
  }
  static async bdtToUsd(amount) {
    const rate = await CurrencyConverter.fetchRate();
    const usd = amount / rate;
    return usd;
  }
}

const usdAmount = 100;
const bdt = await CurrencyConverter.usdToBdt(usdAmount);
console.log(`${usdAmount} USD is equal to ${bdt} BDT`);

const bdtAmount = 100;
const usd = await CurrencyConverter.bdtToUsd(bdtAmount);
console.log(`${bdtAmount} BDT is equal to ${usd} USD`);
