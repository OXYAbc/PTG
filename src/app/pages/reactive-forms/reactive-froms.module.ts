import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { MyFromModule } from './from/form.module';
import { FormsResultsModule } from './results/results.module';
import { MySecondFromModule } from './from-second/secondFrom.module';
import { MultiSelectModule } from 'src/app/@theme/custom-components/multiselect/multiselect.module';
import { LoginService } from 'src/app/@core/services/LoginService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ReactiveFormsComponent,],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MyFromModule, FormsResultsModule, MySecondFromModule, MultiSelectModule, HttpClientModule,
  ],
})
export class MyReactiveFormsModule {}