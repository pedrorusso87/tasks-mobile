import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as taskActions from '../actions/task-actions';
import { TaskService } from 'src/app/services/task-service';

@Injectable()
export default class TaskEffects {
  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.GET_TASKS),
      switchMap(() =>
        this.taskService.getTasks().pipe(
          map((response) => taskActions.GetTasksSuccess({ tasks: response })),
          catchError((error) => of(taskActions.GetTasksFailed(error)))
        )
      )
    )
  );

  addTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.ADD_TASK),
      switchMap((data: any) =>
        this.taskService.addTask(data.payload).pipe(
          map((response) => taskActions.AddTaskSuccess(response)),
          catchError((e) => of(taskActions.AddTaskFailed(e)))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.DELETE_TASK),
      switchMap((data: any) =>
        this.taskService.deleteTask(data.payload).pipe(
          map((response) => taskActions.AddTaskSuccess(response)),
          catchError((e) => of(taskActions.AddTaskFailed(e)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
