import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedItemSoftwareComponent } from './shared-item-software.component';

describe('SharedItemSoftwareComponent', () => {
  let component: SharedItemSoftwareComponent;
  let fixture: ComponentFixture<SharedItemSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedItemSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedItemSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});