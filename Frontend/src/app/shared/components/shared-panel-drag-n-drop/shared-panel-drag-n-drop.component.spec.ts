import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPanelDragNDropComponent } from './shared-panel-drag-n-drop.component';

describe('SharedPanelDragNDropComponent', () => {
  let component: SharedPanelDragNDropComponent;
  let fixture: ComponentFixture<SharedPanelDragNDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedPanelDragNDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedPanelDragNDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});