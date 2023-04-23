import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLayoutFormComponent } from './shared-layout-form.component'; 

describe('SharedLayoutFormComponent', () => {
  let component: SharedLayoutFormComponent;
  let fixture: ComponentFixture<SharedLayoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLayoutFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLayoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});