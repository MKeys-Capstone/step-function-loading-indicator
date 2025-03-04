import {
  Component,
  input,
  InputSignal,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  ProgressBarMode,
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import {
  StepFunctionEventType,
  MockEvents,
  StepFunctionEvent,
} from '../../util/constants';
@Component({
  selector: 'app-step-function-loading-indicator',
  imports: [MatProgressBarModule],
  templateUrl: './step-function-loading-indicator.component.html',
  styleUrl: './step-function-loading-indicator.component.scss',
})
export class StepFunctionLoadingIndicatorComponent implements OnChanges {
  events = input<StepFunctionEvent[]>([]);
  numberOfEvents = input<number>(0);
  lastEventType: StepFunctionEventType;
  mode: ProgressBarMode = 'determinate';
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
          this.progressPercentage = 100;
        }
      }
    }
  }
}
