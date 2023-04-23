import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManageClassesComponent } from './page-manage-classes.component';

describe('PageManageClassesComponent', () => {
  let component: PageManageClassesComponent;
  let fixture: ComponentFixture<PageManageClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageManageClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageManageClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});