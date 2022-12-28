import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { Movie } from 'src/app/@core/movie.model';

@Injectable({
  providedIn: 'root',
})
export class SearchApiService {
  private API_PATH = 'http://localhost:3000/movies';
  constructor(private httpClient: HttpClient) {}

  search(title$: Subject<string>) {
    return title$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((title) => {
        if (!title) {
          return this.getMovies();
        }
        return this.searchMovie(title);
      })
    );
  }

  public getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.API_PATH);
  }

  public searchMovie(title: string): Observable<Movie[]> {
    let params = new HttpParams({ fromObject: { title } });

    return this.httpClient
      .get<Movie[]>(this.API_PATH, { params })
  }

  public postMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.API_PATH, movie);
  }
  public deleteMovie(id: number): Observable<{}> {
    return this.httpClient.delete<{}>(this.API_PATH + '/' + id);
  }
  public getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.API_PATH + '/' + id);
  }
  public getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/categories');
  }
}
