import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClassroomComponent } from './item-classroom.component';

describe('ItemClassroomComponent', () => {
  let component: ItemClassroomComponent;
  let fixture: ComponentFixture<ItemClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemClassroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});