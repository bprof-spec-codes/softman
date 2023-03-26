import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDragNDropComponent } from './shared-drag-n-drop.component';

describe('SharedDragNDropComponent', () => {
  let component: SharedDragNDropComponent;
  let fixture: ComponentFixture<SharedDragNDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDragNDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedDragNDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});