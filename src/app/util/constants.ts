export enum StepFunctionEventType {
  // Task-related events
  TaskStateEntered = 'TaskStateEntered',
  TaskStarted = 'TaskStarted',
  TaskSucceeded = 'TaskSucceeded',
  TaskFailed = 'TaskFailed',
  TaskTimedOut = 'TaskTimedOut',
  TaskAborted = 'TaskAborted',

  // State transition events for step-level tracking
  StateEntered = 'StateEntered',
  StateExited = 'StateExited',

  // Step Function Complete
  ExecutionSucceeded = 'ExecutionSucceeded',
}

export interface StepFunctionEvent {
  timestamp: string; // ISO 8601 timestamp
  type: string; // Type of the event (e.g., TaskStateEntered, TaskStarted, TaskSucceeded)
  stateEnteredEventDetails?: StateEnteredEventDetails; // Only for 'TaskStateEntered'
  taskStartedEventDetails?: TaskStartedEventDetails; // Only for 'TaskStarted'
  taskSucceededEventDetails?: TaskSucceededEventDetails; // Only for 'TaskSucceeded'
  executionSucceededEventDetails?: ExecutionSucceededEventDetails;
}

export type LoadingIndicatorTypes =
  | 'spinner-indeterminate'
  | 'spinner-determinate'
  | 'linear-indeterminate'
  | 'linear-determinate';

export interface StateEnteredEventDetails {
  name: string; // Name of the step (e.g., 'Step1', 'Step2')
  input?: string; // Input for the task in JSON format, if available
}

export interface TaskStartedEventDetails {
  resource: string; // ARN of the resource (e.g., Lambda function ARN)
}

export interface TaskSucceededEventDetails {
  output: string; // Output of the task in JSON format
}

export interface ExecutionSucceededEventDetails {
  output: string; // Output of the task in JSON format
}

export const MockEvents: StepFunctionEvent[] = [
  {
    timestamp: '2024-03-04T12:00:05Z',
    type: 'TaskStateEntered',
    stateEnteredEventDetails: {
      name: 'Generate PDF',
      input: '{"key": "value"}',
    },
  },
  {
    timestamp: '2024-03-04T12:00:10Z',
    type: 'TaskStarted',
    taskStartedEventDetails: {
      resource:
        'arn:aws:lambda:us-east-1:123456789012:function:MyLambdaFunction',
    },
  },
  {
    timestamp: '2024-03-04T12:00:15Z',
    type: 'TaskSucceeded',
    taskSucceededEventDetails: {
      output: '{"result": "success"}',
    },
  },
  {
    timestamp: '2024-03-04T12:00:20Z',
    type: 'TaskStateEntered',
    stateEnteredEventDetails: {
      name: 'Create Signing Event',
    },
  },
  {
    timestamp: '2024-03-04T12:00:25Z',
    type: 'TaskStarted',
    taskStartedEventDetails: {
      resource:
        'arn:aws:lambda:us-east-1:123456789222:function:MyLambdaFunction',
    },
  },
  {
    timestamp: '2024-03-04T12:00:30Z',
    type: 'TaskSucceeded',
    taskSucceededEventDetails: {
      output: '{"result": "success"}',
    },
  },
  {
    timestamp: '2024-03-04T12:00:30Z',
    type: 'ExecutionSucceeded',
    executionSucceededEventDetails: {
      output: '{"result": "success"}',
    },
  },
];
