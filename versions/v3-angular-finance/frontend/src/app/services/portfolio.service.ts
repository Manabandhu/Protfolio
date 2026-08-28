import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PortfolioData } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly apiUrl = 'http://localhost:8082/api/portfolio';

  constructor(private http: HttpClient) {}

  getPortfolio(): Observable<PortfolioData> {
    return this.http.get<PortfolioData>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Portfolio API error', error);
        return throwError(() => new Error('Failed to load portfolio data'));
      })
    );
  }
}
