import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPanelFlowLayoutComponent } from './shared-panel-flow-layout.component';

describe('SharedPanelFlowLayoutComponent', () => {
  let component: SharedPanelFlowLayoutComponent;
  let fixture: ComponentFixture<SharedPanelFlowLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedPanelFlowLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedPanelFlowLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});