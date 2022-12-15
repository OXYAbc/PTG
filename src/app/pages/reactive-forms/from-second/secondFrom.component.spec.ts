import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { FormUserState } from '../forms.state';

import { SecondFromComponent } from './secondFrom.component';

describe('SecondFromComponent', () => {
  let component: SecondFromComponent;
  let fixture: ComponentFixture<SecondFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondFromComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgxsModule.forRoot([FormUserState]),
      ],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => of(false),
            dispatch: () => ({}),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should send data', () => {
    component.form.controls['name'].setValue('test');
    component.form.controls['email'].setValue('test@eai.pl');
    component.form.controls['type'].setValue('user');
    component.form.controls['password'].setValue('test123456789');
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    );
    submitBtn.click();
    expect(component.form.valid).toBeTrue();
  });
});
