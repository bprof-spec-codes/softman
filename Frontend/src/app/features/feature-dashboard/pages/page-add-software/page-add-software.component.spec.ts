import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddSoftwareComponent } from './page-add-software.component';

describe('PageAddSoftwareComponent', () => {
  let component: PageAddSoftwareComponent;
  let fixture: ComponentFixture<PageAddSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});