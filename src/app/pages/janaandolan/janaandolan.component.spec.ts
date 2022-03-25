import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanaandolanComponent } from './janaandolan.component';

describe('JanaandolanComponent', () => {
  let component: JanaandolanComponent;
  let fixture: ComponentFixture<JanaandolanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanaandolanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JanaandolanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
