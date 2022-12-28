import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MultiselectComponent } from 'src/app/@theme/custom-components/multiselect/multiselect.component';
import {
  SetUserData,
  SetUserEmail,
  SetUserName,
  SetUserPassword,
  SetUserPlaces,
  SetUserType,
} from '../forms.state';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.sass'],
})
export class FromComponent implements OnInit {
  @ViewChild(MultiselectComponent, { static: false })
  private multiselect?: MultiselectComponent;
  @Input() items?: Observable<string[]>;
  protected arrayToSend: string[] = [];
  form: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    type: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    places: this.fb.array([]),
  });

  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit() {
    this.multiselect?.resetSelected();
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
    this.multiselect?.resetSelected();
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

  onSelectCities(array: string[]) {
    this.arrayToSend = array;
    this.store.dispatch(new SetUserPlaces(array));
  }

  onSubmit() {
    const placesArray = this.form.get('places') as FormArray;
    this.arrayToSend.forEach((item) => placesArray.push(new FormControl(item)));
    if (this.form.valid) {
      this.store.dispatch(new SetUserData(this.form.value));
      this.resetForm();
    }
  }
}
