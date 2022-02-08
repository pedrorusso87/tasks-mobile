import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TaskStatusActions } from '../actions';
import { TasksStatusService } from 'src/app/services/tasks-status-service';

@Injectable()
export default class TaskStatusEffects {
  getTasksStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskStatusActions.GET_TASKS_STATUS),
      switchMap(() =>
        this.taskStatusService.getTasksStatus().pipe(
          map((response) =>
            TaskStatusActions.getTasksStatusSuccess({ tasksStatus: response })
          ),
          catchError((error) =>
            of(TaskStatusActions.getTasksStatusFailed({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private taskStatusService: TasksStatusService
  ) {}
}
