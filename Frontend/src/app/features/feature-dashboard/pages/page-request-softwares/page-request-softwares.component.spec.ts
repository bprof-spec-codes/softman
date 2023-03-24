import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRequestSoftwaresComponent } from './page-request-softwares.component';

describe('PageRequestSoftwaresComponent', () => {
  let component: PageRequestSoftwaresComponent;
  let fixture: ComponentFixture<PageRequestSoftwaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRequestSoftwaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRequestSoftwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});