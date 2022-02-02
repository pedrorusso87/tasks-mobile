import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as taskActions from '../task-actions';
import { TaskService } from 'src/app/services/task-service';

@Injectable()
export default class TaskEffects {
  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.GET_TASKS),
      switchMap(() =>
        this.taskService.getTasks().pipe(
          map((response) => new taskActions.GetTasksSuccess(response)),
          catchError((error) => of(new taskActions.GetTasksFailed(error)))
        )
      )
    )
  );

  addTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.ADD_TASK),
      switchMap((data: any) =>
        this.taskService.addTask(data.payload).pipe(
          map((response) => new taskActions.AddTaskSuccess(response)),
          catchError((e) => of(new taskActions.AddTaskFailed(e)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
