import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManageClaimsComponent } from './page-manage-claims.component';

describe('PageManageClaimsComponent', () => {
  let component: PageManageClaimsComponent;
  let fixture: ComponentFixture<PageManageClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageManageClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageManageClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});