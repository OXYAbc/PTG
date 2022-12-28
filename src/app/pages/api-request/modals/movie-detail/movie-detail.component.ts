import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/@core/movie.model';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass'],
})
export class MovieDetailComponent{
  movie$?: Observable<Movie>;
  constructor(
    private dialogRef: DialogRef<Partial<Movie>>,
    @Inject(DIALOG_DATA) public data: Observable<Movie>
  ) {
    this.movie$ = data;
  }
}
