import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as homeActions from '../home-actions';
import { TaskService } from 'src/app/services/task-service';

@Injectable()
export default class HomeEffects {
  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homeActions.GET_TASKS),
      switchMap(() =>
        this.taskService.getTasks().pipe(
          map((response) => new homeActions.GetTasksSuccess(response)),
          catchError((error) => of(new homeActions.GetTasksFailed(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
