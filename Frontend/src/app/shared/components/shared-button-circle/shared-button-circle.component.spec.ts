import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtonCircleComponent } from './shared-button-circle.component';

describe('SharedButtonCircleComponent', () => {
  let component: SharedButtonCircleComponent;
  let fixture: ComponentFixture<SharedButtonCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedButtonCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedButtonCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});