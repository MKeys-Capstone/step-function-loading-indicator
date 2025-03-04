import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFunctionLoadingIndicatorComponent } from './step-function-loading-indicator.component';

describe('StepFunctionLoadingIndicatorComponent', () => {
  let component: StepFunctionLoadingIndicatorComponent;
  let fixture: ComponentFixture<StepFunctionLoadingIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepFunctionLoadingIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepFunctionLoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
