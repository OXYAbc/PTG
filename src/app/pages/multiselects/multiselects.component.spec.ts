import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectsComponent } from './multiselects.component';

describe('MultiselectsComponent', () => {
  let component: MultiselectsComponent;
  let fixture: ComponentFixture<MultiselectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiselectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
