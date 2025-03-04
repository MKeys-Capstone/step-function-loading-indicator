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
  statusMessage: StepFunctionEventType;
  mode: ProgressBarMode = 'determinate';
  stepName: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['events']) {
      const events = changes['events'].currentValue;
      if (events.length > 0) {
        const lastEvent = events[0];
        this.statusMessage = lastEvent.type;
        if (lastEvent.type === StepFunctionEventType.TaskStateEntered) {
          this.stepName = lastEvent.stateEnteredEventDetails.name;
        }
      }
    }
  }
}
