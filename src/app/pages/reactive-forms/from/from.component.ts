import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import {
  SetUserData,
  SetUserEmail,
  SetUserName,
  SetUserPassword,
  SetUserType,
} from '../forms.state';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.sass'],
})
export class FromComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    type: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit() {
    this.form.get('name')?.valueChanges.subscribe(() => {
      this.store.dispatch(new SetUserName(this.form.get('name')?.value));
    });
    this.form.get('email')?.valueChanges.subscribe(() => {
      if (this.email?.valid)
        this.store.dispatch(new SetUserEmail(this.form.get('email')?.value));
    });
    this.form.get('password')?.valueChanges.subscribe(() => {
      if (this.password?.valid)
        this.store.dispatch(
          new SetUserPassword(this.form.get('password')?.value)
        );
    });
    this.form.get('type')?.valueChanges.subscribe(() => {
      this.store.dispatch(new SetUserType(this.form.get('type')?.value));
    });
  }
  resetForm(): void {
    this.form.reset();
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
    if(this.form.valid){
      this.resetForm();
      this.store.dispatch(new SetUserData(this.form.value));
    }
  }
}
