import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundPanelComponent } from './background-panel.component';

describe('BackgroundPanelComponent', () => {
  let component: BackgroundPanelComponent;
  let fixture: ComponentFixture<BackgroundPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});