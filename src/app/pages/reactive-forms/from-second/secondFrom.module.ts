import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/@theme/custom-components/multiselect/multiselect.module';
import { SecondFromComponent } from './secondFrom.component';

@NgModule({
  declarations: [SecondFromComponent],
  providers: [],
  exports: [SecondFromComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MultiSelectModule],
})
export class MySecondFromModule {}
