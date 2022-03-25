import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseriComponent } from './baseri.component';

describe('BaseriComponent', () => {
  let component: BaseriComponent;
  let fixture: ComponentFixture<BaseriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
