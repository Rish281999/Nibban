import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentunionComponent } from './studentunion.component';

describe('StudentunionComponent', () => {
  let component: StudentunionComponent;
  let fixture: ComponentFixture<StudentunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
