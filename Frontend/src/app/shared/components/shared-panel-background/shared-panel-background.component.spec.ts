import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPanelBackgroundComponent } from './shared-panel-background.component';

describe('SharedPanelBackgroundComponent', () => {
  let component: SharedPanelBackgroundComponent;
  let fixture: ComponentFixture<SharedPanelBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedPanelBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedPanelBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});