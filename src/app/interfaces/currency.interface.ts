export interface CurrencyResponse {
  success: boolean;
  terms: string;
  privacy: string;
  timestamp: number;
  source: string;
  quotes: {
    [key: string]: number;
  };
}

export interface CurrencyRate {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
}
