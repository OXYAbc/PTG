import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { FormUserState } from './pages/reactive-forms/forms.state';
import { MyReactiveFormsModule } from './pages/reactive-forms/reactive-froms.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, MyReactiveFormsModule, NgxsModule.forRoot([FormUserState])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
