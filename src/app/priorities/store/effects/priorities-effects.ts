import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as prioritiesActions from '../priorities-actions';
import { PrioritiesService } from 'src/app/services/priorities-service';

@Injectable()
export default class PrioritiesEffects {
  getPriorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(prioritiesActions.GET_PRIORITIES),
      switchMap(() =>
        this.prioritiesService.getPriorities().pipe(
          map(
            (response) => new prioritiesActions.GetPrioritiesSuccess(response)
          ),
          catchError((error) =>
            of(new prioritiesActions.GetPrioritiesFailed(error))
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
