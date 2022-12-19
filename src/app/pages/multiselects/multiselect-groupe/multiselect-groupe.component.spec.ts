import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectGroupeComponent } from './multiselect-groupe.component';

describe('MultiselectGroupeComponent', () => {
  let component: MultiselectGroupeComponent;
  let fixture: ComponentFixture<MultiselectGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectGroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiselectGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
