import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormUserState, UserStateModel } from '../forms.state';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent{
  @Select(FormUserState.getState) form$?: Observable<UserStateModel>;
}