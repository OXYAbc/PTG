import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { FormUserState } from '../forms.state';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [NgxsModule.forRoot([FormUserState])],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => of(false),
            dispatch: () => ({}),
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
