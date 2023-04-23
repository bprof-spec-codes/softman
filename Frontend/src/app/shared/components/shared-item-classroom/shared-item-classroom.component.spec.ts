import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedItemClassroomComponent } from './shared-item-classroom.component';

describe('SharedItemClassroomComponent', () => {
  let component: SharedItemClassroomComponent;
  let fixture: ComponentFixture<SharedItemClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedItemClassroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedItemClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});