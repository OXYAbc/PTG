import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRequestComponent } from './pages/api-request/api-request.component';
import { BotComponent } from './pages/bot/bot.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgrxComponent } from './pages/ngrx/ngrx.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent,
    title: ' Reactive forms',
  },
  {
    path: 'api',
    component: ApiRequestComponent,
    title: 'Api'
  },
  {
    path: 'bot',
    component: BotComponent,
    title: 'Bot'
  },
  {
    path: 'ngrx',
    component: NgrxComponent,
    title: 'NgRX'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
