import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddClassComponent } from './page-add-class.component'

describe('PageAddClassComponent', () => {
  let component: PageAddClassComponent;
  let fixture: ComponentFixture<PageAddClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});