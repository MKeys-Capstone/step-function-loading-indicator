import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { StepFunctionEvent, StepFunctionEventType } from '../../util/constants';
import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-spinner-loading-indicator',
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner-loading-indicator.component.html',
  styleUrl: './spinner-loading-indicator.component.scss',
})
export class SpinnerLoadingIndicatorComponent implements OnChanges {
  events = input<StepFunctionEvent[]>([]);
  numberOfEvents = input<number>(0);
  mode = input<ProgressSpinnerMode>('indeterminate');
  lastEventType: StepFunctionEventType;
  currentStepName: string = '';
  completedSteps: number = 0;
  progressPercentage: number = 5;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['events']) {
      const events = changes['events'].currentValue;
      if (events.length > 0) {
        const lastEvent = events[0];
        this.lastEventType = lastEvent.type;
        if (lastEvent.type === StepFunctionEventType.TaskStateEntered) {
          this.currentStepName = lastEvent.stateEnteredEventDetails.name;
        }
        if (lastEvent.type === StepFunctionEventType.TaskSucceeded) {
          this.completedSteps++;
          this.progressPercentage =
            (this.completedSteps / this.numberOfEvents()) * 100 - 10;
        }
        if (lastEvent.type === StepFunctionEventType.ExecutionSucceeded) {
          this.currentStepName = 'Execution Completed';
          this.progressPercentage = 100;
        }
      }
    }
  }
}
