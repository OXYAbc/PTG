import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SearchApiService } from './api-request.service';
import { Dialog } from '@angular/cdk/dialog';
import { AddMovieComponent } from './modals/add-movie/add-movie.component';
import { Movie } from 'src/app/@core/movie.model';
import { MovieDetailComponent } from './modals/movie-detail/movie-detail.component';
import { AlertMessageComponent } from 'src/app/@theme/custom-components/alert/alert.component';

@Component({
  selector: 'app-api-request',
  templateUrl: './api-request.component.html',
  styleUrls: ['./api-request.component.sass'],
})
export class ApiRequestComponent implements OnInit {
  protected search$ = new BehaviorSubject<string>('');
  protected itemID$ = new Subject<number>();
  protected movies$?: Observable<Movie[]>;
  protected delete: boolean = false;
  protected category$?: Observable<string[]>;

  constructor(private serviceAPI: SearchApiService, private dialog: Dialog) {
    this.movies$ = this.serviceAPI.search(this.search$);
    this.category$ = this.serviceAPI.getCategories();
  }
  ngOnInit(): void {
    this.itemID$.subscribe((id) => {
      if (!this.delete) {
        const movie$ = this.serviceAPI.getMovie(id);
        const dialogRef = this.dialog.open(MovieDetailComponent, {
          data: movie$,
        });
      }
    });
  }

  protected onAddMovie(): void {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      data: this.category$,
    });
    dialogRef.closed.subscribe((res) => {
      if (res) {
        this.serviceAPI.postMovie(res as Movie).subscribe();
      }
    });
  }
  protected onDelete(): void {
    this.delete = !this.delete;
    this.itemID$.subscribe((res) => {
      if (this.delete) {
        const dialogRef = this.dialog.open(AlertMessageComponent, {
          data: 'movie',
        });
        dialogRef.closed.subscribe((option) => {
          if (option) this.serviceAPI.deleteMovie(res).subscribe();
        });
        this.delete = false;
      }
    });
  }
}
