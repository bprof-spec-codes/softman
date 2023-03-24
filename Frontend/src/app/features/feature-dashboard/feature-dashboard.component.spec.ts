import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDashboardComponent } from './feature-dashboard.component';

describe('FeatureDashboardComponent', () => {
  let component: FeatureDashboardComponent;
  let fixture: ComponentFixture<FeatureDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});