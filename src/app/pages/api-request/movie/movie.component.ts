import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/@core/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass'],
})
export class MovieComponent {
  @Input() data: Partial<Movie> = {};
  get title() {
    return this.data.title;
  }
  get genre() {
    return this.data.genre;
  }
  get director() {
    return this.data.director;
  }
  get poster() {
    return this.data.poster || '';
  }
  set poster(img: string) {
    this.poster = img;
  }
}
