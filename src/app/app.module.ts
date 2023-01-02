import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiRequestModule } from './pages/api-request/api-request.module';
import { BotModule } from './pages/bot/bot.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { MultiSelectsModule } from './pages/multiselects/multiselects.module';
import { CheckboxSelectionState } from './pages/multiselects/state/multiselect-state';
import { FormUserState } from './pages/reactive-forms/forms.state';
import { MyReactiveFormsModule } from './pages/reactive-forms/reactive-froms.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    DashboardModule,
    MyReactiveFormsModule,
    BrowserModule,
    NgxsModule.forRoot([FormUserState, CheckboxSelectionState]),
    MultiSelectsModule,
    ApiRequestModule,
    BotModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}