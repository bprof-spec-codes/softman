import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageButtonCircleComponent } from './page-button-circle.component';

describe('PageButtonCircleComponent', () => {
  let component: PageButtonCircleComponent;
  let fixture: ComponentFixture<PageButtonCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageButtonCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageButtonCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});