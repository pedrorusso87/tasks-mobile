import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/services/task-service';
import { AddTaskRequest } from '../../../task/models/task-model';

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

export const getTasks = createAction(GET_TASKS);

export const GetTasksSuccess = createAction(
  GET_TASKS_SUCCESS,
  props<{ tasks: Task[] }>()
);

export const GetTasksFailed = createAction(
  GET_TASKS_FAILED,
  props<{ error: any }>()
);
export const AddTask = createAction(
  ADD_TASK,
  props<{ payload: AddTaskRequest }>()
);
export const AddTaskSuccess = createAction(
  ADD_TASK_SUCCESS,
  props<{ payload: any }>()
);
export const AddTaskFailed = createAction(
  ADD_TASK_FAILED,
  props<{ error: any }>()
);
export const DeleteTask = createAction(
  DELETE_TASK,
  props<{ payload: string }>()
);

export const DeleteTaskSuccess = createAction(
  DELETE_TASK_SUCCESS,
  props<{ payload: any }>()
);
export const DeleteTaskFailed = createAction(
  DELETE_TASK_FAILED,
  props<{ error: any }>()
);
