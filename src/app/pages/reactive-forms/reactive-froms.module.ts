import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { MyFromModule } from './from/form.module';
import { FormsResultsModule } from './results/results.module';
import { MySecondFromModule } from './from-second/secondFrom.module';

@NgModule({
  declarations: [ReactiveFormsComponent,],
  providers: [],
  exports: [ReactiveFormsComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MyFromModule, FormsResultsModule, MySecondFromModule],
})
export class MyReactiveFormsModule {}
