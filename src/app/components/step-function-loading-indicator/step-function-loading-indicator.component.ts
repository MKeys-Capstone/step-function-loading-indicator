import { Component, InputSignal } from '@angular/core';
import {
  ProgressBarMode,
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import { StepFunctionEventType } from '../../util/constants';
@Component({
  selector: 'app-step-function-loading-indicator',
  imports: [MatProgressBarModule],
  templateUrl: './step-function-loading-indicator.component.html',
  styleUrl: './step-function-loading-indicator.component.scss',
})
export class StepFunctionLoadingIndicatorComponent {
  events: InputSignal<{}[]>;
  statusMessage: StepFunctionEventType;
  mode: ProgressBarMode = 'determinate';

  constructor() {}
}
