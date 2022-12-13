import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FromComponent } from './from.component';

@NgModule({
  declarations: [FromComponent],
  providers: [],
  exports: [FromComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class MyFromModule {}
