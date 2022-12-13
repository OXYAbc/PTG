import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFromComponent } from './secondFrom.component';

describe('SecondFromComponent', () => {
  let component: SecondFromComponent;
  let fixture: ComponentFixture<SecondFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondFromComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
