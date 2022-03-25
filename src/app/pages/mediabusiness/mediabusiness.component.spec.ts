import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediabusinessComponent } from './mediabusiness.component';

describe('MediabusinessComponent', () => {
  let component: MediabusinessComponent;
  let fixture: ComponentFixture<MediabusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediabusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediabusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
