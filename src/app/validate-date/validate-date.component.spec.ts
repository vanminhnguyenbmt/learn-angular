import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateDateComponent } from './validate-date.component';

describe('ValidateDateComponent', () => {
  let component: ValidateDateComponent;
  let fixture: ComponentFixture<ValidateDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
