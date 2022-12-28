import { NgModule } from '@angular/core';
import { ApiRequestComponent } from './api-request.component';
import { SearchApiService } from './api-request.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './modals/add-movie/add-movie.component';
import { CommonModule } from '@angular/common';
import {DialogModule} from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/@theme/custom-components/multiselect/multiselect.module';
import { MovieDetailComponent } from './modals/movie-detail/movie-detail.component';
import { AlertMessageComponent } from 'src/app/@theme/custom-components/alert/alert.component';


@NgModule({
  declarations: [ApiRequestComponent, MovieComponent, AddMovieComponent, MovieDetailComponent, AlertMessageComponent],
  providers: [SearchApiService],
  imports: [HttpClientModule, CommonModule, DialogModule, FormsModule, MultiSelectModule],
})
export class ApiRequestModule {}