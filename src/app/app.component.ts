import { Component, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepFunctionLoadingIndicatorComponent } from './components/step-function-loading-indicator/step-function-loading-indicator.component';
import { MockEvents, StepFunctionEvent } from './util/constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StepFunctionLoadingIndicatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'step-function-test';
  events = signal<StepFunctionEvent[]>([]);

  currentEventIndex: number = 0;

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

        console.log('Event added:', MockEvents[this.currentEventIndex - 1]);
      } else {
        // Stop adding events when we've reached the end of MockEvents
        clearInterval(eventInterval);
        console.log('All events have been added.');
      }
    }, 2000); // Add a new event every 2 seconds
  }
}
