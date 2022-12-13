import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondFromComponent } from './secondFrom.component';

@NgModule({
  declarations: [SecondFromComponent],
  providers: [],
  exports: [SecondFromComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class MySecondFromModule {}
