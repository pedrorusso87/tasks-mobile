import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DashboardActions } from '../actions';
import { DashboardService } from 'src/app/services/dashboard-service';

@Injectable()
export default class DashboardEffects {
  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.GET_USER_DASHBOARDS),
      switchMap((action: any) =>
        this.dashboardService.getUserDashboards(action.userId).pipe(
          map((response) =>
            DashboardActions.getUserDashboardsSuccess({
              userDashboards: response,
            })
          ),
          catchError((error) =>
            of(DashboardActions.getUserDashboardsFailed({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}
}
