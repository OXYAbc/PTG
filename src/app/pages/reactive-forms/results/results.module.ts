import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultsComponent } from './results.component';


@NgModule({
  declarations: [ResultsComponent,],
  providers: [],
  exports: [ResultsComponent],
  imports: [AsyncPipe],
})
export class FormsResultsModule {}
