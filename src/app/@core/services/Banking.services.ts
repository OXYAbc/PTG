import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../account.model';
import { forkJoin, Observable } from 'rxjs';

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
  public updateAccountData(account: Partial<Account>): Observable<Account> {
    return this.http.patch<Account>(this.API_PATH + '/' + account.id, account);
  }
  public deleteAccount(id: string): Observable<{}> {
    return this.http.delete<{}>(this.API_PATH + '/' + id);
  }

  public deleteAccounts(accountIds: string[]): Observable<{}> {
    let results: Observable<{}>[] = [];

    for (let id of accountIds) {
      results.push(this.deleteAccount(id));
    }
    return forkJoin(results);
  }
}
