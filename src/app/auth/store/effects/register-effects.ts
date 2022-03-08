import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import * as registerUserActions from '../actions/register-actions';
import { AuthService } from 'src/app/services/auth-service';

@Injectable()
export default class RegisterEffects {
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUserActions.REGISTER_USER),
      switchMap((data: any) =>
        from(this.authService.register(data.payload)).pipe(
          map((response) =>
            registerUserActions.registerUserSuccess({
              registerResponse: response,
            })
          ),
          catchError((error) =>
            of(registerUserActions.registerUserFailed(error))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
