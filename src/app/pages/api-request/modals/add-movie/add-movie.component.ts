import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/@core/movie.model';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AddMovieComponent {
  genre?: Observable<string[]>;
  movie: Partial<Movie> = {};
  constructor(
    private dialogRef: DialogRef<Partial<Movie>>,
    @Inject(DIALOG_DATA) public data: Observable<string[]>
  ) {
    this.genre = data
  }
  addMovie() {
    this.dialogRef.close(this.movie);
  }
  convertToStr(genre: string[]) {
    this.movie.genre = genre.join(', ');
  }
}
