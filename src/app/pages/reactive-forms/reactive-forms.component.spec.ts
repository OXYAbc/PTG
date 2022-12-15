import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { FormUserState } from './forms.state';
import { MySecondFromModule } from './from-second/secondFrom.module';
import { MyFromModule } from './from/form.module';

import { ReactiveFormsComponent } from './reactive-forms.component';
import { FormsResultsModule } from './results/results.module';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormsComponent],
      imports: [MyFromModule, FormsResultsModule, MySecondFromModule, NgxsModule.forRoot([FormUserState])],
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

    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
