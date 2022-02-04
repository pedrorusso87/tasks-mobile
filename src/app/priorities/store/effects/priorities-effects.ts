import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as prioritiesActions from '../actions/priorities-actions';
import { PrioritiesService } from 'src/app/services/priorities-service';

@Injectable()
export default class PrioritiesEffects {
  getPriorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(prioritiesActions.GET_PRIORITIES),
      mergeMap(() =>
        this.prioritiesService.getPriorities().pipe(
          map((response) =>
            prioritiesActions.GetPrioritiesSuccess({ priorities: response })
          ),
          catchError((error) =>
            of(prioritiesActions.GetPrioritiesFailed({ error: error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private prioritiesService: PrioritiesService
  ) {}
}
