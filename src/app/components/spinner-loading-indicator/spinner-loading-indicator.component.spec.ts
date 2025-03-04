import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerLoadingIndicatorComponent } from './spinner-loading-indicator.component';

describe('SpinnerLoadingIndicatorComponent', () => {
  let component: SpinnerLoadingIndicatorComponent;
  let fixture: ComponentFixture<SpinnerLoadingIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerLoadingIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerLoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
