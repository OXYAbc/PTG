import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRequestComponent } from './pages/api-request/api-request.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MultiselectsComponent } from './pages/multiselects/multiselects.component';
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
    path: 'multiselects',
    component: MultiselectsComponent,
    title: 'MultiSelect',
  },
  {
    path: 'api',
    component: ApiRequestComponent,
    title: 'Api'
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
