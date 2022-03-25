import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationcarrerComponent } from './educationcarrer.component';

describe('EducationcarrerComponent', () => {
  let component: EducationcarrerComponent;
  let fixture: ComponentFixture<EducationcarrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationcarrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationcarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
