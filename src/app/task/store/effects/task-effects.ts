import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TaskService } from 'src/app/services/task-service';
import { TaskActions } from '../actions';

@Injectable()
export default class TaskEffects {
  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.GET_TASKS),
      switchMap(() =>
        this.taskService.getTasks().pipe(
          map((response) => TaskActions.GetTasksSuccess({ tasks: response })),
          catchError((error) => of(TaskActions.GetTasksFailed({ error })))
        )
      )
    )
  );

  addTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.ADD_TASK),
      switchMap((data: any) =>
        this.taskService.addTask(data.payload).pipe(
          map((response) => TaskActions.AddTaskSuccess(response)),
          catchError((error) => of(TaskActions.AddTaskFailed({ error })))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.DELETE_TASK),
      switchMap((data: any) =>
        this.taskService.deleteTask(data.payload).pipe(
          map((response) => TaskActions.AddTaskSuccess(response)),
          catchError((error) => of(TaskActions.AddTaskFailed({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
