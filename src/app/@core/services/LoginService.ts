import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { Country } from '../country-city.model';
import {
  FormUserState,
  UserStateModel,
} from 'src/app/pages/reactive-forms/forms.state';
import { Select } from '@ngxs/store';

@Injectable({ providedIn: 'root' })
export class LoginService {
  @Select(FormUserState.getState) formState$?: Observable<UserStateModel>;
  @Select(FormUserState.getPlaces) selectedCountry$?: Observable<string[]>;
  private selectedCountries$ = new BehaviorSubject<string[]>([]);

  private API_PATH = 'http://localhost:3000/county';


  constructor(private httpClient: HttpClient) {
    this.selectedCountry$?.subscribe((res) =>
      this.selectedCountries$.next(res)
    );
  }

  getData(): Observable<Country> {
    return this.httpClient.get<Country>(this.API_PATH);
  }
  public getCities(): Observable<string[]> {
    return this.httpClient
      .get<Country[]>(this.API_PATH)
      .pipe(
        map((res) =>
          res
            ?.map((item) => item.items.map((city) => city.value))
            .reduce((acc, curr) => [...acc, ...curr], [])
        )
      );
  }
  public getCountry(): Observable<string[]> {
    return this.httpClient
      .get<Country[]>(this.API_PATH)
      .pipe(map((res) => res?.map((res) => res.label)));
  }
  public getAvailableCity() {
    return this.selectedCountries$.pipe(
      switchMap((country) =>
        this.httpClient.get<Country[]>(this.API_PATH).pipe(
          map((data) => {
            let cities: string[] = [];
            data.forEach((countryData) => {
              if (country.includes(countryData.label)) {
                countryData.items.forEach((city) => {
                  cities.push(city.value);
                });
              }
            });
            return cities;
          })
        )
      )
    );
  }
  public getSelectedCities() {
    return this.selectedCountry$;
  }
}
