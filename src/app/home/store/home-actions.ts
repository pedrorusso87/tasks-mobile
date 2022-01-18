import { Action } from '@ngrx/store';
import { Task } from 'src/app/services/task-service';

//Tasks actions GET Tasks
export const GET_TASKS = '[TASKS] get tasks';
export const GET_TASKS_SUCCESS = '[TASKS] get tasks success';
export const GET_TASKS_FAILED = '[TASKS] get tasks failed';

export class GetTasks implements Action {
  readonly type = GET_TASKS;
  constructor() {}
}

export class GetTasksSuccess implements Action {
  readonly type = GET_TASKS_SUCCESS;
  constructor(public payload: Task[]) {}
}

export class GetTasksFailed implements Action {
  readonly type = GET_TASKS_FAILED;
  constructor(public payload: any) {}
}

// action types
export type TasksActions = GetTasks | GetTasksSuccess | GetTasksFailed;
