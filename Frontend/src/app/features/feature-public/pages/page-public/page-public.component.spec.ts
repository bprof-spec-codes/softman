import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePublicComponent } from './page-public.component';

describe('PagePublicComponent', () => {
  let component: PagePublicComponent;
  let fixture: ComponentFixture<PagePublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});