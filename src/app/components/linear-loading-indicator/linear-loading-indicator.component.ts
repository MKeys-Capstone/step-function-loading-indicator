import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ProgressBarMode,
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import {
  StepFunctionEventType,
  StepFunctionEvent,
  LoadingIndicatorTypes,
} from '../../util/constants';
import { TitleCaseCamelPipe } from '../../title-case-camel.pipe';
@Component({
  selector: 'app-linear-loading-indicator',
  imports: [MatProgressBarModule, TitleCaseCamelPipe],
  templateUrl: './linear-loading-indicator.component.html',
  styleUrl: './linear-loading-indicator.component.scss',
})
export class LinearLoadingIndicatorComponent implements OnChanges {
  events = input<StepFunctionEvent[]>([]);
  numberOfEvents = input<number>(0);
  mode = input<ProgressBarMode>('determinate');
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
