import { Component, OnInit, Signal, signal } from '@angular/core';
import { LinearLoadingIndicatorComponent } from './components/linear-loading-indicator/linear-loading-indicator.component';
import {
  LoadingIndicatorTypes,
  MockEvents,
  StepFunctionEvent,
} from './util/constants';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerLoadingIndicatorComponent } from './components/spinner-loading-indicator/spinner-loading-indicator.component';

@Component({
  selector: 'app-root',
  imports: [
    LinearLoadingIndicatorComponent,
    SpinnerLoadingIndicatorComponent,
    MatButtonToggleModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'step-function-test';
  events = signal<StepFunctionEvent[]>([]);
  numberOfEvents = signal<number>(2);
  currentEventIndex: number = 0;
  selectedLoadingIndicator =
    signal<LoadingIndicatorTypes>('linear-determinate');

  constructor() {}
  ngOnInit() {
    // Simulate adding events every 3 seconds (3000ms)
    const eventInterval = setInterval(() => {
      if (this.currentEventIndex < MockEvents.length) {
        // Add the next event from MockEvents to the events array
        this.events.update((events: StepFunctionEvent[]) => [
          MockEvents[this.currentEventIndex],
          ...events,
        ]);
        this.currentEventIndex++;
      } else {
        // Stop adding events when we've reached the end of MockEvents
        clearInterval(eventInterval);
      }
    }, 1000); // Add a new event every 2 seconds
  }
}
