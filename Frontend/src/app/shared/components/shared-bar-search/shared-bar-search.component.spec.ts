import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBarSearchComponent } from './shared-bar-search.component';

describe('SharedBarSearchComponent', () => {
  let component: SharedBarSearchComponent;
  let fixture: ComponentFixture<SharedBarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedBarSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedBarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});