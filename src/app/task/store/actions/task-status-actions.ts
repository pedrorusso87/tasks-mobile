import { createAction, props } from '@ngrx/store';
import { TasksStatus } from 'src/app/services/tasks-status-service';

//Get all tasks statuses
export const GET_TASKS_STATUS = '[TASKS STATUS] get tasks status';
export const GET_TASKS_STATUS_SUCCESS =
  '[TASKS STATUS] get tasks status success';
export const GET_TASKS_STATUS_FAILED = '[TASKS STATUS] get tasks status failed';

export const getTasksStatus = createAction(GET_TASKS_STATUS);

export const getTasksStatusSuccess = createAction(
  GET_TASKS_STATUS_SUCCESS,
  props<{ tasksStatus: TasksStatus[] }>()
);

export const getTasksStatusFailed = createAction(
  GET_TASKS_STATUS_FAILED,
  props<{ error: any }>()
);
