import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBackgroundPanelComponent } from './shared-background-panel.component';

describe('SharedBackgroundPanelComponent', () => {
  let component: SharedBackgroundPanelComponent;
  let fixture: ComponentFixture<SharedBackgroundPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedBackgroundPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedBackgroundPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});