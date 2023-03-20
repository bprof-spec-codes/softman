import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePublicComponent } from './feature-public.component';

describe('NavbarComponent', () => {
  let component: FeaturePublicComponent;
  let fixture: ComponentFixture<FeaturePublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturePublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});