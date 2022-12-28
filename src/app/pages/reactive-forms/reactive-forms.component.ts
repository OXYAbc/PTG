import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/@core/services/LoginService';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.sass'],
})
export class ReactiveFormsComponent {
  protected cities$?: Observable<string[]> =
    this.loginService.getAvailableCity();
  protected countries$: Observable<string[]> = this.loginService.getCountry();
  protected slectedCountries$?: string[];

  constructor(private loginService: LoginService) {}
}
