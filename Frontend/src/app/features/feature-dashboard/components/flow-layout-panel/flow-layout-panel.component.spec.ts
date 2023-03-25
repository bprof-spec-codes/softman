import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowLayoutPanelComponent } from './flow-layout-panel.component';

describe('FlowLayoutPanelComponent', () => {
  let component: FlowLayoutPanelComponent;
  let fixture: ComponentFixture<FlowLayoutPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowLayoutPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowLayoutPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});