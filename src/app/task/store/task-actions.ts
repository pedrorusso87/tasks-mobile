import { Action } from '@ngrx/store';
import { Task } from 'src/app/services/task-service';
import { AddTaskRequest } from '../models/task-model';

//Tasks actions GET Tasks
export const GET_TASKS = '[TASKS] get tasks';
export const GET_TASKS_SUCCESS = '[TASKS] get tasks success';
export const GET_TASKS_FAILED = '[TASKS] get tasks failed';

// ADD Task
export const ADD_TASK = '[TASKS] add task';
export const ADD_TASK_SUCCESS = '[TASKS] add task success';
export const ADD_TASK_FAILED = '[TASKS] add task failed';

//Delete Task
export const DELETE_TASK = '[TASKS] delete task';
export const DELETE_TASK_SUCCESS = '[TASKS] delete task success';
export const DELETE_TASK_FAILED = '[TASKS] delete task failed';
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
export class AddTask implements Action {
  readonly type = ADD_TASK;
  constructor(public payload: AddTaskRequest) {}
}
export class AddTaskSuccess implements Action {
  readonly type = ADD_TASK_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTaskFailed implements Action {
  readonly type = ADD_TASK_FAILED;
  constructor(public payload: any) {}
}
export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
  constructor(public payload: AddTaskRequest) {}
}
export class DeleteTaskSuccess implements Action {
  readonly type = DELETE_TASK_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTaskFailed implements Action {
  readonly type = DELETE_TASK_FAILED;
  constructor(public payload: any) {}
}
// action types
export type TasksActions =
  | GetTasks
  | GetTasksSuccess
  | GetTasksFailed
  | AddTask
  | AddTaskSuccess
  | AddTaskFailed
  | DeleteTask
  | DeleteTaskSuccess
  | DeleteTaskFailed;
