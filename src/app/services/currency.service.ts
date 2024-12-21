import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { CurrencyResponse, CurrencyRate } from '../interfaces/currency.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private api_key: string = "26c870240d04744f7198ddfb2cacc167";
  private baseURL: string = "https://apilayer.net/api/live";

  constructor(private http: HttpClient) { }

  getCurrencyRates(sourceCurrency: string, targetCurrencies: string[]): Observable<CurrencyRate[]> {
    const params = new HttpParams()
      .set('access_key', this.api_key)
      .set('currencies', targetCurrencies.join(','))
      .set('source', sourceCurrency)

    return this.http.get<CurrencyResponse>(this.baseURL, { params })
      .pipe(
        retry(3),
        map(response => this.transformResponse(response, sourceCurrency, targetCurrencies)),
        catchError(this.handleError)
      );
  }

  convertAmount(amount: number, fromCurrency: string, toCurrency: string): Observable<number> {
    return this.getCurrencyRates(fromCurrency, [toCurrency]).pipe(
      map(([rate]) => {
        if (fromCurrency === rate.fromCurrency) {
          return Math.round((amount * rate.rate));
        } else {
          return Math.round((amount * (1 / rate.rate)));
        }
      })
    );
  }

  private transformResponse(response: CurrencyResponse, sourceCurrency: string, targetCurrencies: string[]): CurrencyRate[] {
    return targetCurrencies.map(targetCurrency => {
      const quoteKey = `${sourceCurrency}${targetCurrency}`;
      return {
        fromCurrency: sourceCurrency,
        toCurrency: targetCurrency,
        rate: response.quotes[quoteKey]
      };
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error: ${error.error.message}`;
    } else {
      errorMessage = `Server error: Status ${error.status}, Message: ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
