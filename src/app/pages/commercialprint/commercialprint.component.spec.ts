import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialprintComponent } from './commercialprint.component';

describe('CommercialprintComponent', () => {
  let component: CommercialprintComponent;
  let fixture: ComponentFixture<CommercialprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
