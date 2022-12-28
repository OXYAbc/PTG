import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/@theme/custom-components/multiselect/multiselect.module';
import { FromComponent } from './from.component';

@NgModule({
  declarations: [FromComponent],
  providers: [],
  exports: [FromComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MultiSelectModule],
})
export class MyFromModule {}
