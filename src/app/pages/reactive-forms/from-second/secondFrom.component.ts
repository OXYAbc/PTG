import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormUserState, SetUserData, UserStateModel } from '../forms.state';

@Component({
  selector: 'app-second-form',
  templateUrl: './secondFrom.component.html',
  styleUrls: ['./secondFrom.component.sass'],
})
export class SecondFromComponent {
  @Input() cities?: Observable<string[]>;
  @Select(FormUserState.getState) formState$?: Observable<UserStateModel>;
  private nameValue: string = '';
  form: FormGroup = this.fb.group({
    name: new FormControl(this.nameValue, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    type: new FormControl('user', [Validators.required]),
  });

  constructor(private fb: FormBuilder, private store: Store) {
    this.formState$?.subscribe((res) => {
      this.form.controls['name'].setValue(res.name);
      this.form.controls['email'].setValue(res.email);
      this.form.controls['type'].setValue(res.type);
      this.form.controls['password'].setValue(res.password);
    });
  }

  get name() {
    return this.form?.get('name');
  }
  get email() {
    return this.form?.get('email');
  }
  get password() {
    return this.form?.get('password');
  }
  get type() {
    return this.form?.get('type');
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(new SetUserData(this.form.value));
    }
  }
}
