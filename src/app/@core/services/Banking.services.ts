import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../account.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BankingService {
  private API_PATH = 'http://localhost:3000/accounts';
  constructor(private http: HttpClient) {}

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.API_PATH);
  }

  public getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(this.API_PATH + '/' + id);
  }
}
