import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service';
import { LoginActions } from '../actions';

@Injectable()
export default class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.LOGIN),
      switchMap((request: any) =>
        this.authService.login(request).pipe(
          map((response) =>
            LoginActions.loginSuccess({ userLoginResponse: response })
          ),
          catchError((error) => of(LoginActions.loginFailed({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
