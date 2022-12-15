import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';

import { FromComponent } from './from.component';

describe('FromComponent', () => {
  let component: FromComponent;
  let fixture: ComponentFixture<FromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FromComponent],
      imports: [ReactiveFormsModule, FormsModule],
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

    fixture = TestBed.createComponent(FromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset Form', () => {
    component.form.controls['name'].setValue('test');
    component.form.controls['email'].setValue('test');
    component.form.controls['password'].setValue('test');
    component.resetForm();
    expect(component.form.controls['name'].value).toBe(null);
    expect(component.form.controls['email'].value).toBe(null);
    expect(component.form.controls['password'].value).toBe(null);
  });

  it('should call onSubmit, but its shouldnt call to reset from', () => {
    spyOn(component, 'onSubmit');
    spyOn(component, 'resetForm');
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    );
    submitBtn.click();
    expect(component.onSubmit).toHaveBeenCalled();
    expect(component.resetForm).not.toHaveBeenCalled();
  });
  it('should send data', () => {
    spyOn(component, 'resetForm').and.callThrough();
    component.form.controls['name'].setValue('test');
    component.form.controls['email'].setValue('test@eai.pl');
    component.form.controls['type'].setValue('user');
    component.form.controls['password'].setValue('test123456789');
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    );
    submitBtn.click();
    expect(component.resetForm).toHaveBeenCalled();
  });
});
