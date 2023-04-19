import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditClassComponent } from './page-edit-class.component';

describe('PageEditClassComponent', () => {
  let component: PageEditClassComponent;
  let fixture: ComponentFixture<PageEditClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});